import miscAction from './misc/misc.action';
import miscReducers from './misc/misc.reducer';

import booksAction from './books/books.action';
import booksReducer from './books/books.reducer';

const Actions = {
	miscAction,
	booksAction,
};

const Reducers = {
	miscReducers,
	booksReducer,
};

export {
	Actions,
	Reducers,
};
