import { View } from 'react-native';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';

import { Container, Header, ListOfBooks } from '@components';
import styles from './style';
import { NavigationHelper, useAppDispatch, useAppSelector } from '@helpers';
import { Actions } from '@store';
import { IPayloadGetBooks } from 'src/interfaces/books';

const Home = () => {
	const classicBooks = useAppSelector(state => state.booksReducer.classicBooks);
	const designBooks = useAppSelector(state => state.booksReducer.designBooks);
	const programmingBooks = useAppSelector(state => state.booksReducer.programmingBooks);

	const getClassicBooksDispatch = useAppDispatch(Actions.booksAction.getClassicBooks);
	const getProgrammingBooksDispatch = useAppDispatch(Actions.booksAction.getProgrammingBooks);
	const getDesignBooksDispatch = useAppDispatch(Actions.booksAction.getDesignBooks);

	useEffect(() => {
		getClassicBooks();
		getProgrammingBooks();
		getDesignBooks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getClassicBooks = () => {
		const payload: IPayloadGetBooks = {
			limit: 10,
			offset: 0,
		};

		getClassicBooksDispatch(payload);
	};

	const getProgrammingBooks = () => {
		const payload: IPayloadGetBooks = {
			limit: 10,
			offset: 0,
		};

		getProgrammingBooksDispatch(payload);
	};
	const getDesignBooks = () => {
		const payload: IPayloadGetBooks = {
			limit: 10,
			offset: 0,
		};

		getDesignBooksDispatch(payload);
	};

	const showToast = (type: string) => {
		Toast.show({
			type,
			text1: 'Success',
			text2: 'Berhasil Menampilkan Toast',
		});
	};

	return (
		<Container noPadding>
			<Header />
			<View style={ styles.container }>
				<ListOfBooks
					data={ classicBooks }
					label={ 'Classic Books' }
					handleSeeAll={ () => NavigationHelper.push('Books', {
						type: 'classic',
					}) }
				/>
				<ListOfBooks
					data={ programmingBooks }
					label={ 'Programming Books' }
					handleSeeAll={ () => NavigationHelper.push('Books', {
						type: 'programming',
					}) }
				/>
				<ListOfBooks
					data={ designBooks }
					label={ 'Design Books' }
					handleSeeAll={ () => NavigationHelper.push('Books', {
						type: 'design',
					}) }
				/>
			</View>
		</Container>
	);
};

export default Home;
