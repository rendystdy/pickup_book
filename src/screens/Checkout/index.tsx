import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Container, Header, Input } from '@components';
import { FormikProps, useFormik } from 'formik';
import { Auth } from '@validator';
import { NavigationHelper, useAppDispatch, useAppSelector } from '@helpers';
import styles from './style';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import { WorksEntity } from 'src/interfaces/books';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Actions } from '@store';

interface MyValues {
  full_name: string,
  phone_number: string;
  pickup_date: string;
}

const Checkout = () => {
  const [enableValidation, setEnableValidation] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const carts = useAppSelector(state => state.bookingReducer.carts);

  const resetCartsDispatch = useAppDispatch(Actions.bookingAction.resetCarts);

  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    validateOnBlur: enableValidation,
    validateOnChange: enableValidation,
    validationSchema: Auth.CheckoutValidationSchema,
    initialValues: {
      full_name: '',
      phone_number: '',
      pickup_date: '',

    },
    onSubmit: () => {
      showToast('success');
      setTimeout(() => {
        formik.resetForm();
        resetCartsDispatch();
        NavigationHelper.push('Home');
      }, 2000);
    },
  });

  const showToast = (type: string) => {
    Toast.show({
      type,
      text1: 'Success',
      text2: 'Your order has been successfully sent',
      position: 'top',
    });
  };

  return (
    <Container noPadding>
      <Header
        label='Checkout'
        isBack
        isCart={ false }
      />
      <View style={ styles.container }>
        <Input
          formik={ formik }
          name='full_name'
          label='Full Name*'
          placeholder='Enter your full name'
          mt={ 10 }
          keyboardType='default' />
        <Input
          formik={ formik }
          name='phone_number'
          label='Phone Number*'
          placeholder='Enter your phone number'
          mt={ 10 }
          keyboardType='number-pad' />
        <View>
          <TouchableOpacity
            onPress={ () => setOpen(!open) }
            style={ { position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, opacity: 0.3 } }>
            <View style={ { height: 70 } } />
          </TouchableOpacity>
          <Input
            formik={ formik }
            name='pickup_date'
            onPressIn={ () => setOpen(true) }
            mt={ 10 }
            editable={ true }
            label='Pick up Schedule*'
            placeholder='Enter your pick up schedule'
            keyboardType='default' />
        </View>
        <View style={ styles.wrapperSummary }>
          <Text style={ styles.textSummary }>Summary</Text>
          { carts.map(({ title, cover_id, edition_count }: WorksEntity, i: number) => (
            <View
              key={ i }
              style={ styles.wrapperItem }>
              <Image
                source={ { uri: `https://covers.openlibrary.org/b/id/${ cover_id }.jpg` } }
                style={ styles.img }
                resizeMode='cover'
              />
              <Text>{ title }</Text>
              <Text>Edition number: { edition_count }</Text>
            </View>
          )) }
          <Text style={ styles.total }>Total: { carts.length } item</Text>
        </View>
        <View style={ styles.footer }>
          <Button
            buttonStyle={ styles.button }
            onPress={ () => { setEnableValidation(true); formik.handleSubmit(); } }>
            <Text style={ styles.textButton }>Process</Text>
          </Button>
        </View>
      </View>
      <DatePicker
        modal
        mode='date'
        open={ open }
        date={ date }
        onConfirm={ result => {
          setOpen(false);
          const formatDate = dayjs(result).format('DD/MM/YYYY');
          formik.setFieldValue('pickup_date', formatDate.toString());
        } }
        onCancel={ () => {
          setOpen(false);
        } }
      />
    </Container>
  );
};

export default Checkout;
