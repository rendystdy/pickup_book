import { Colors } from '@constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 70,
		backgroundColor: 'white',
	},
	wrapperItem: {
		backgroundColor: 'white',
		shadowColor: Colors.black.default,
		borderWidth: 1,
		borderColor: Colors.gray.default,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.3,
		elevation: 3,
		borderRadius: 6,
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 6,
		marginRight: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		letterSpacing: 1,
		color: Colors.black.default,
	},
	footer: {
		position: 'absolute',
		bottom: 10,
		left: 0,
		right: 0,
		backgroundColor: 'white',
		paddingHorizontal: 12,
	},
	button: {
		backgroundColor: Colors.yellow.default,
	},
	textButton: {
		color: Colors.black.default,
		fontWeight: 'bold',
		letterSpacing: 1,
	},
});

export default styles;
