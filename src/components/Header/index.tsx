import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

import styles from './style';
import { Text } from '@components';
import { NavigationHelper } from '@helpers';

interface IProps {
  label?: string;
  isBack?: boolean;
}

const Header = ({ label = 'List of Books', isBack }: IProps) => {
  return (
    <View style={ styles.container }>
      { isBack && (
        <TouchableOpacity onPress={ () => NavigationHelper.pop(1) }>
          <Icons
            name='arrowleft'
            size={ 18 }
            color={ '#000' }
            style={ { zIndex: 2 } } />
        </TouchableOpacity>
      ) }
      <View style={ styles.wrapperTitle }>
        <Text style={ styles.title }>{ label }</Text>
      </View>
    </View>
  );
};

export default Header;
