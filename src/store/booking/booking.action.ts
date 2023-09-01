import { Dispatches } from '@constant';
import { WorksEntity } from 'src/interfaces/books';

export default {
	setCart: (payload: WorksEntity) => {
		return {
			type: Dispatches.SET_CART,
			payload: payload,
		};
	},
	removeCartItem: (payload: number) => {
		return {
			type: Dispatches.REMOVE_CART_ITEM,
			payload: payload,
		};
	},
	resetCarts: () => {
		return {
			type: Dispatches.RESET_CARTS,
		};
	},
};
