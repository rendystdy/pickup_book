import { Home, Splash, Books } from '@screens';

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
] as const;
