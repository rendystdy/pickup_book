import {
  ActivityIndicator, FlatList, Image, Text, View,
} from 'react-native';
import React, { useState } from 'react';

import style from './style';
import { Button, Container, Header } from '@components';
import { useAppDispatch, useAppSelector } from '@helpers';
import { ComponentInterface } from '@interfaces';
import { useRoute } from '@react-navigation/native';
import { Actions } from '@store';
import { IPayloadGetBooks, WorksEntity } from 'src/interfaces/books';
import { Colors } from '@constant';

interface Iitem {
  item: ComponentInterface.IListOfBooks.WorksEntity;
}

const Books = () => {
  const route: any = useRoute();
  const type = route.params?.type;

  const loading = useAppSelector(state => state.booksReducer.loadingClassicBooks);
  const loadingProgramming = useAppSelector(state => state.booksReducer.loadingProgrammingBooks);
  const loadingDesign = useAppSelector(state => state.booksReducer.loadingDesignBooks);

  const [isLoadMore, setIsLoadMore] = useState(false);
  const [offset, setOffset] = useState(9);

  const classicBooks = useAppSelector(state => state.booksReducer.classicBooks);
  const programmingBooks = useAppSelector(state => state.booksReducer.programmingBooks);
  const designBooks = useAppSelector(state => state.booksReducer.designBooks);

  const getClassicBooksDispatch = useAppDispatch(Actions.booksAction.getClassicBooks);
  const getProgrammingBooksDispatch = useAppDispatch(Actions.booksAction.getProgrammingBooks);
  const getDesignBooksDispatch = useAppDispatch(Actions.booksAction.getDesignBooks);
  const setCartDispatch = useAppDispatch(Actions.bookingAction.setCart);

  const handleAddToCart = (item: WorksEntity) => {
    const payload = {
      ...item,
    };
    setCartDispatch(payload);
  };

  const renderItem = ({ item }: Iitem) => {
    return (
      <View style={ style.wrapperItem }>
        <Image
          source={ { uri: `https://covers.openlibrary.org/b/id/${ item.cover_id }.jpg` } }
          style={ style.img }
          resizeMode='contain' />
        <Text
          numberOfLines={ 1 }
          style={ style.title }>{ item.title }
        </Text>
        <Button
          buttonStyle={ style.button }
          onPress={ () => handleAddToCart(item) }
        >
          <Text style={ style.titleBook }>Add to cart</Text>
        </Button>
      </View>
    );
  };

  const handleGenerateLabel = () => {
    switch (type) {
      case 'classic':
        return 'Classic Books';
      case 'programming':
        return 'Programming Books';
      case 'design':
        return 'Design Books';
      default:
        return 'Classic Books';
    }
  };

  const handleLoadMore = () => {
    if (!isLoadMore) { return null; }
    const payload: IPayloadGetBooks = {
      limit: 10,
      offset: offset,
    };
    switch (type) {
      case 'classic':
        getClassicBooksDispatch(payload);
        return setOffset(offset + 10);
      case 'programming':
        getProgrammingBooksDispatch(payload);
        return setOffset(offset + 10);
      case 'design':
        getDesignBooksDispatch(payload);
        return setOffset(offset + 10);
      default:
        getClassicBooksDispatch(payload);
        return setOffset(offset + 10);
    }
  };

  const renderFooter = () => {
    if (loading || loadingProgramming || loadingDesign) {
      return (
        <ActivityIndicator
          size={ 'small' }
          color={ Colors.blue.default } />
      );
    }
    return null;
  };

  const handleGenerateData = () => {
    switch (type) {
      case 'classic':
        return classicBooks.works;
      case 'programming':
        return programmingBooks.works;
      case 'design':
        return designBooks.works;
      default:
        return classicBooks.works;
    }
  };

  return (
    <Container
      noPadding
      noScroll>
      <Header
        label={ handleGenerateLabel() }
        isBack />
      <View style={ style.container }>
        <FlatList
          onScroll={ () => setIsLoadMore(true) }
          data={ handleGenerateData() }
          keyExtractor={ (_, i) => i.toString() }
          renderItem={ renderItem }
          numColumns={ 3 }
          contentContainerStyle={ { paddingHorizontal: 8, paddingBottom: 20 } }
          ItemSeparatorComponent={ () => <View style={ { height: 10 } } /> }
          columnWrapperStyle={ { justifyContent: 'space-between' } }
          onEndReachedThreshold={ 0.1 }
          ListFooterComponent={ renderFooter }
          onEndReached={ handleLoadMore }
        />
      </View>
    </Container>
  );
};

export default Books;
