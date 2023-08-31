
import { Dispatch } from 'redux';

import { Dispatches, Endpoints } from '@constant';
import { BooksInterface } from '@interfaces';
import { API } from '@helpers';

import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default {
	getClassicBooks: (payload: BooksInterface.IPayloadGetBooks) => (dispatch: Dispatch) => {
		dispatch({
			type: Dispatches.API_LOADING_CLASSIC_BOOKS,
			payload: true,
		});
		API.get<BooksInterface.IPayloadGetBooks>(`${Endpoints.GET_CLASSIC_BOOKS}`, {
			limit: payload.limit,
			offset: payload.offset,
		})
			.then(response => {
				dispatch({
					type: Dispatches.SET_CLASSIC_BOOKS,
					payload: {
						offset: payload.offset,
						response,
					},
				});
			})
			.catch(() => {
				// todo handle error
				dispatch({
					type: Dispatches.API_LOADING_CLASSIC_BOOKS,
					payload: false,
				});
				Toast.show({
					type: 'error',
					text1: 'Error',
					text2: 'Oops, sorry, we are experiencing some problem',
				});
			})
			.finally(() => {
				dispatch({
					type: Dispatches.API_LOADING_CLASSIC_BOOKS,
					payload: false,
				});
			});
	},
	getProgrammingBooks: (payload: BooksInterface.IPayloadGetBooks) => (dispatch: Dispatch) => {
		dispatch({
			type: Dispatches.API_LOADING_PROGRAMMING_BOOKS,
			payload: true,
		});
		API.get<BooksInterface.IPayloadGetBooks>(`${Endpoints.GET_PROGRAMMING_BOOKS}`, {
			limit: payload.limit,
			offset: payload.offset,
		})
			.then(response => {
				dispatch({
					type: Dispatches.SET_PROGRAMMING_BOOKS,
					payload: {
						offset: payload.offset,
						response,
					},
				});
			})
			.catch(() => {
				// todo handle error
				dispatch({
					type: Dispatches.API_LOADING_PROGRAMMING_BOOKS,
					payload: false,
				});
				Toast.show({
					type: 'error',
					text1: 'Error',
					text2: 'Oops, sorry, we are experiencing some problem',
				});
			})
			.finally(() => {
				dispatch({
					type: Dispatches.API_LOADING_PROGRAMMING_BOOKS,
					payload: false,
				});
			});
	},
	getDesignBooks: (payload: BooksInterface.IPayloadGetBooks) => (dispatch: Dispatch) => {
		dispatch({
			type: Dispatches.API_LOADING_DESIGN_BOOKS,
			payload: true,
		});
		API.get<BooksInterface.IPayloadGetBooks>(`${Endpoints.GET_DESIGN_BOOKS}`, {
			limit: payload.limit,
			offset: payload.offset,
		})
			.then(response => {
				dispatch({
					type: Dispatches.SET_DESIGN_BOOKS,
					payload: {
						offset: payload.offset,
						response,
					},
				});
			})
			.catch(() => {
				// todo handle error
				dispatch({
					type: Dispatches.API_LOADING_DESIGN_BOOKS,
					payload: false,
				});
				Toast.show({
					type: 'error',
					text1: 'Error',
					text2: 'Oops, sorry, we are experiencing some problem',
				});
			})
			.finally(() => {
				dispatch({
					type: Dispatches.API_LOADING_DESIGN_BOOKS,
					payload: false,
				});
			});
	},
};
