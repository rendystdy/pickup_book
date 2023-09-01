import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

import styles from './style';
import { Text } from '@components';
import { NavigationHelper, useAppSelector } from '@helpers';

interface IProps {
  label?: string;
  isBack?: boolean;
  icColor?: string;
  isCart?: boolean;
}

const Header = ({ label = 'List of Books', isBack, icColor = '#000', isCart = true }: IProps) => {
  const carts = useAppSelector(state => state.bookingReducer.carts);
  console.log('carts', carts.length);
  return (
    <View style={ [styles.container, isCart && { justifyContent: 'space-between' }] }>
      { isBack && (
        <TouchableOpacity onPress={ () => NavigationHelper.pop(1) }>
          <Icons
            name='arrowleft'
            size={ 24 }
            color={ icColor }
            style={ { zIndex: 2 } } />
        </TouchableOpacity>
      ) }
      <View style={ isCart ? {} : styles.wrapperTitle }>
        <Text style={ [styles.title, { color: icColor }] }>{ label }</Text>
      </View>
      { isCart && (
        <TouchableOpacity
          activeOpacity={ 0.9 }
          onPress={ () => NavigationHelper.push('Cart') }>
          { carts.length > 0 && <View style={ styles.circleRed } /> }
          <Icons
            name='shoppingcart'
            size={ 24 } />
        </TouchableOpacity>
      ) }
    </View>
  );
};

export default Header;
