/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatches } from '@constant';
import { BookingInterface } from '@interfaces';

const initialState: BookingInterface.BookingState = {
	loading: false,
	carts: [],
};

type Actions = { type: string; payload: any };

const miscReducers = (
	state = initialState,
	action: Actions,
): BookingInterface.BookingState => {
	const { type, payload } = action;
	switch (type) {
		case Dispatches.SET_CART:
			return {
				...state,
				carts: state.carts.concat(payload),
			};
		case Dispatches.REMOVE_CART_ITEM:
			const newData = state.carts.filter(item => item.cover_id !== payload);
			return {
				...state,
				carts: newData,
			};
		case Dispatches.RESET_CARTS:
			return {
				...state,
				carts: [],
			};
		default:
			return state;
	}
};

export default miscReducers;
