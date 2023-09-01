import { Image, Text, View, ScrollView } from 'react-native';
import React from 'react';

import styles from './style';
import { Button, Container, Header } from '@components';
import { useRoute } from '@react-navigation/native';
import { AuthorsEntity } from 'src/interfaces/components/listofbooks';
import { Colors } from '@constant';
import { useAppDispatch } from '@helpers';
import { Actions } from '@store';

const DetailBook = () => {
  const route: any = useRoute();
  const title = route.params?.title;
  const cover_id = route.params?.cover_id;
  const authors = route.params?.authors;
  const genre = route.params?.subject;

  const setCartDispatch = useAppDispatch(Actions.bookingAction.setCart);

  const handleAddToCart = () => {
    const payload = {
      ...route.params,
    };
    setCartDispatch(payload);
  };

  return (
    <Container
      noPadding
      noScroll>
      <Header
        label={ '' }
        icColor='#fff'
        isBack />
      <ScrollView style={ styles.container }>
        <Image
          source={ { uri: `https://covers.openlibrary.org/b/id/${ cover_id }.jpg` } }
          resizeMode='cover'
          style={ styles.image }
        />
        <View style={ styles.wrapper }>
          <Text style={ styles.title }>{ title }</Text>
          <View style={ { marginBottom: 5 } }>
            <Text style={ styles.titleAuthors }>Authors:</Text>
            { authors.map(({ name }: AuthorsEntity, i: number) => (
              <Text
                key={ i }
                style={ styles.textAuthor }>{ name }</Text>
            )) }
          </View>
          <View>
            <Text style={ styles.titleAuthors }>Genre:</Text>
            <View style={ styles.rowSpaceBetween }>
              { genre.map((item: string, i: number) => (
                <Text
                  style={ styles.textAuthor }
                  key={ i }>- { item }</Text>
              )) }
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={ styles.wrapperButton }>
        <Button
          onPress={ handleAddToCart }
          backgroundColor={ Colors.blue.default }
          buttonStyle={ styles.button }>
          <Text style={ styles.titleButton }>Add to cart</Text>
        </Button>
      </View>
    </Container>
  );
};

export default DetailBook;
