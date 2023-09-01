import {
	Home, Splash, Books, DetailBook, Cart, Checkout,
} from '@screens';

export const screens = [
	{
		name: 'Splash',
		component: Splash,
	},
	{
		name: 'Home',
		component: Home,
	},
	{
		name: 'Books',
		component: Books,
	},
	{
		name: 'DetailBook',
		component: DetailBook,
	},
	{
		name: 'Cart',
		component: Cart,
	},
	{
		name: 'Checkout',
		component: Checkout,
	},
] as const;
