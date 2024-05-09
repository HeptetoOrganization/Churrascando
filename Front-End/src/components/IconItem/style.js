import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const stylesComponent = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

        width: 140,
        height: 90,
        
        borderRadius: theme.borderRadius.radius,
        backgroundColor: theme.colors.marquis_orange,
    },
    image: {
        width: 70,
        height: 70,
        alignSelf: 'center',
    }
})