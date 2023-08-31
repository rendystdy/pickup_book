/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

import { NavigationHelper, Ratio, useAppDispatch } from '@helpers';
import { Images } from '@constant';
import styles from './style';
import { Actions } from '@store';
import { Text } from '@components';
function Splash() {

	const setDeviceHeight = useAppDispatch(Actions.miscAction.setDeviceHeight);

	useEffect(() => {

		setDeviceHeight(Ratio.getDeviceHeight());

		// save timeoutId to clear the timeout when the component re-renders
		const tm = setTimeout(() => {
			NavigationHelper.reset('Home');
		}, 3000);

		// clear timeout on re-render to avoid memory leaks
		return () => {
			clearTimeout(tm);
		};
	}, []);

	return (
		<View style={ styles.container }>
			<Image
				source={ Images.HandBook }
				resizeMode='contain'
				style={ { width: 60, height: 60 } } />
			<Text style={ { fontSize: 26, color: '#000', fontWeight: '500', letterSpacing: 1 } }>Pickup Books</Text>
		</View>
	);
}

export default Splash;
