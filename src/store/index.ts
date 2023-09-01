import miscAction from './misc/misc.action';
import miscReducers from './misc/misc.reducer';

import booksAction from './books/books.action';
import booksReducer from './books/books.reducer';

import bookingAction from './booking/booking.action';
import bookingReducer from './booking/booking.reducer';

const Actions = {
	miscAction,
	booksAction,
	bookingAction,
};

const Reducers = {
	miscReducers,
	booksReducer,
	bookingReducer,
};

export {
	Actions,
	Reducers,
};
