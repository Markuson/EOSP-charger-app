import { StyleSheet } from 'react-native';

export default styles = {
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },

    indicator: {
        margin: 10,
        flex: 1,
        borderWidth: 2,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 1,
        shadowOpacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginHorizontal: 20,
        marginVertical: 20,
        elevation: 1
    },
    indicatorGreen: {
        backgroundColor: 'green',
        borderColor: 'green',
    },
    indicatorGray: {
        backgroundColor: 'gray',
        borderColor: 'gray',
    },
}