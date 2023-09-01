import { Colors } from '@constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 15,
		paddingTop: 70,
	},
	wrapperSummary: {
		marginTop: 20,
		backgroundColor: Colors.gray.light,
		borderRadius: 6,
		padding: 15,
	},
	textSummary: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.black.default,
		marginBottom: 10,
	},
	wrapperItem: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		marginBottom: 10,
		borderRadius: 6,
	},
	img: {
		width: 30,
		height: 30,
		borderRadius: 4,
		marginRight: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	total: {
		fontWeight: 'bold',
		fontSize: 22,
		color: Colors.black.default,
	},
	footer: {
		position: 'absolute',
		bottom: 10,
		left: 0,
		right: 0,
		paddingHorizontal: 15,
	},
	button: {
		backgroundColor: Colors.yellow.default,
		padding: 0,
		height: 40,
	},
	textButton: {
		color: Colors.black.default,
	},
});

export default styles;
