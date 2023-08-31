import { Colors } from '@constant';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {},
	title: {
		fontSize: 17,
		fontWeight: '500',
		marginBottom: 10,
	},
	wrapperImg: {
		width: width / 6,
		backgroundColor: Colors.gray.default,
		height: '70%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 3,
		marginBottom: 10,
		borderRadius: 6,
	},
	img: {
		width: width / 6,
		height: '100%',
		borderRadius: 6,
	},
	wrapperItem: {
		height: 150,
		width: width / 4,
		alignItems: 'center',
	},
	titleBook: {
		width: width / 4,
		textAlign: 'center',
		color: 'white',
		fontSize: 12,
	},
	button: { height: 30, width: '90%', padding: 0, backgroundColor: Colors.blue.default },
	rowSpaceBetween: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	textSeeAll: {
		fontSize: 12,
	},
});

export default styles;
