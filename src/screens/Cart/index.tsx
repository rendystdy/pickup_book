import {
  FlatList, Image, Text, TouchableOpacity, View,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

import { Button, Container, Header } from '@components';
import styles from './style';
import { NavigationHelper, useAppDispatch, useAppSelector } from '@helpers';
import { AuthorsEntity, WorksEntity } from 'src/interfaces/books';
import { Actions } from '@store';
import { Colors } from '@constant';

interface IItem {
  item: WorksEntity;
}

const Cart = () => {
  const carts = useAppSelector(state => state.bookingReducer.carts);

  const removeCartItemDispatch = useAppDispatch(Actions.bookingAction.removeCartItem);

  const removeCartItem = (id: number) => {
    removeCartItemDispatch(id);
  };

  const renderItem = ({ item }: IItem) => {
    return (
      <View style={ styles.wrapperItem }>
        <Image
          source={ { uri: `https://covers.openlibrary.org/b/id/${ item.cover_id }.jpg` } }
          resizeMode='cover'
          style={ styles.image }
        />
        <View style={ { flex: 1 } }>
          <Text style={ styles.title }>{ item.title }</Text>
          <View style={ styles.row }>
            <Text numberOfLines={ 1 }>Authors:</Text>
            <View style={ { width: 200, flexDirection: 'row', alignItems: 'center', overflow: 'hidden' } }>
              { item.authors?.map(({ name }: AuthorsEntity, i: number) => (
                <Text
                  numberOfLines={ 1 }
                  key={ i }
                  style={ { fontSize: 12 } }>{ name }</Text>
              )) }
            </View>
          </View>
          <View style={ styles.row }>
            <Text>Edition Number:</Text>
            <Text>{ item.edition_count }</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={ 0.8 }
          onPress={ () => removeCartItem(item.cover_id) }>
          <Icons
            name='delete'
            size={ 22 } />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Container
      noPadding
      noScroll>
      <Header
        label='My carts'
        isBack
        isCart={ false } />
      <View style={ styles.container } >
        <FlatList
          data={ carts }
          renderItem={ renderItem }
          keyExtractor={ (_, i) => i.toString() }
          ListEmptyComponent={ () => <View style={ { flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' } }>
            <Text style={ { fontSize: 22, fontWeight: 'bold', color: Colors.black.default } }>Empty</Text>
          </View> }
          ItemSeparatorComponent={ () => <View style={ { height: 10 } } /> }
        />
        <View style={ styles.footer }>
          <Button
            buttonStyle={ styles.button }
            disabled={ carts.length === 0 }
            onPress={ () => NavigationHelper.push('Checkout') }>
            <Text style={ styles.textButton }>Checkout</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default Cart;
