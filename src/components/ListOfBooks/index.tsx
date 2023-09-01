import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { Button, Text } from '@components';
import { BooksInterface, ComponentInterface } from '@interfaces';
import styles from './style';
import { Colors } from '@constant';
import { NavigationHelper, useAppDispatch } from '@helpers';
import { Actions } from '@store';
import { WorksEntity } from 'src/interfaces/books';

interface Iitem {
  item: ComponentInterface.IListOfBooks.WorksEntity;
}

interface IProps {
  label: string | null;
  data: BooksInterface.Books;
  handleSeeAll: () => void;
}

const ListOfBooks = ({ label, data, handleSeeAll }: IProps) => {

  const setCartDispatch = useAppDispatch(Actions.bookingAction.setCart);

  const handleAddToCart = (item: WorksEntity) => {
    const payload = {
      ...item,
    };
    setCartDispatch(payload);
  };

  const handleDetail = (item: WorksEntity) => {
    NavigationHelper.push('DetailBook', {
      ...item,
    });
  };

  const renderItem = ({ item }: Iitem) => {
    return (
      <TouchableOpacity
        activeOpacity={ 0.8 }
        onPress={ () => handleDetail(item) }
        style={ styles.wrapperItem }>
        <View style={ styles.wrapperImg }>
          <Image
            source={ { uri: `https://covers.openlibrary.org/b/id/${ item.cover_id }.jpg` } }
            style={ styles.img }
            resizeMode='cover' />
        </View>
        <Button
          buttonStyle={ styles.button }
          onPress={ () => handleAddToCart(item) }
        >
          <Text style={ styles.titleBook }>Add to carts</Text>
        </Button>
      </TouchableOpacity>
    );
  };

  return (
    <View style={ { marginBottom: 15 } }>
      <View style={ styles.rowSpaceBetween }>
        <Text style={ styles.title }>{ label }</Text>
        <TouchableOpacity onPress={ handleSeeAll }>
          <Text style={ styles.textSeeAll }>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ data.works?.slice(0, 4) }
        keyExtractor={ (_, i) => i.toString() }
        renderItem={ renderItem }
        contentContainerStyle={ { paddingHorizontal: 10, backgroundColor: Colors.gray.light } }
        horizontal
        showsHorizontalScrollIndicator={ false }
      />
    </View>
  );
};

export default ListOfBooks;
