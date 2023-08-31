import { Colors } from '@constant';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 70,
		backgroundColor: 'white',
	},
	wrapperItem: {
		height: 200,
		backgroundColor: Colors.gray.light,
		width: '32%',
		borderRadius: 6,
		shadowColor: Colors.black.default,
		borderWidth: 1,
		borderColor: Colors.gray.light,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.15,
		shadowRadius: 6,
		elevation: 9,
	},
	img: {
		height: width / 3,
		width: '100%',
		borderRadius: 6,
		// flex: 1,
		alignSelf: 'center',
		marginBottom: 5,
	},
	title: {
		fontSize: 12,
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: 5,
	},
	button: { height: 30, width: '90%', padding: 0, backgroundColor: Colors.blue.default, alignSelf: 'center' },
	titleBook: {
		textAlign: 'center',
		color: 'white',
		fontSize: 12,
	},
});

export default styles;
