import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { Button, Text } from '@components';
import { BooksInterface, ComponentInterface } from '@interfaces';
import styles from './style';
import { Colors } from '@constant';

interface Iitem {
  item: ComponentInterface.IListOfBooks.WorksEntity;
}

interface IProps {
  label: string | null;
  data: BooksInterface.Books;
  handleSeeAll: () => void;
}

const ListOfBooks = ({ label, data, handleSeeAll }: IProps) => {

  const renderItem = ({ item }: Iitem) => {
    return (
      <View style={ styles.wrapperItem }>
        <View style={ styles.wrapperImg }>
          <Image
            source={ { uri: `https://covers.openlibrary.org/b/id/${ item.cover_id }.jpg` } }
            style={ styles.img }
            resizeMode='cover' />
        </View>
        <Button
          buttonStyle={ styles.button }>
          <Text style={ styles.titleBook }>Borrow</Text>
        </Button>
      </View>
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
