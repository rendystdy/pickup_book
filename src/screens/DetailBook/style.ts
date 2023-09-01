import { Colors } from '@constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		// paddingTop: 70,
	},
	image: {
		width: '100%',
		height: 300,
		marginBottom: 10,
	},
	wrapper: {
		paddingHorizontal: 10,
	},
	rowSpaceBetween: {
		// flexDirection: 'row',
		// alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		letterSpacing: 1,
		marginBottom: 8,
	},
	titleAuthors: {
		fontSize: 13,
		fontWeight: '500',
		marginBottom: 5,
	},
	textAuthor: {
		fontSize: 11,
	},
	wrapperButton: {
		position: 'absolute',
		// height: 60,
		// backgroundColor: 'red',
		// width: '100%',
		bottom: 10,
		left: 0,
		right: 0,
		zIndex: 2,
	},
	button: {
		padding: 0,
		backgroundColor: Colors.blue.default,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		width: '80%',
		alignSelf: 'center',
		borderRadius: 6,
	},
	titleButton: {
		color: 'white',
		fontSize: 16,
	},
});

export default styles;
