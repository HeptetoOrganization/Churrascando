import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const stylesComponent = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        gap: 20,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',

        justifyContent: 'space-between',
    },
    button: {
        width: 140,
        height: 90,
        justifyContent: 'center',
        borderRadius: theme.borderRadius.radius,
    },
    buttonSelected: {
        backgroundColor: theme.colors.marquis_orange, // Cor quando seleciona
    },
    image: {
        width: 70,
        height: 70,
        alignSelf: 'center',
    },
})