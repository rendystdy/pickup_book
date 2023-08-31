import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 10,
		height: 60,
		paddingHorizontal: 20,
		alignItems: 'center',
		flexDirection: 'row',
	},
	wrapperTitle: {
		position: 'absolute',
		alignSelf: 'center',
		top: 0,
		left: 0,
		right: 0,
		flex: 1,
		zIndex: -1,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		letterSpacing: 1,
	},
});

export default styles;
