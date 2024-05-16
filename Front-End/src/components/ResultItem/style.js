import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const stylesComponent = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        backgroundColor: theme.colors.peach_nougat,
        borderRadius: theme.borderRadius.radius,
        marginBottom: theme.spacing.sm,

        //justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    // titulo
    text: {
        color: theme.colors.white,
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.sm,
 
        //textAlign: 'left',
    },
    viewImage: {
        display: 'flex',
        height: 40,
        paddingHorizontal: 8,

        justifyContent: 'center',
    },
    image: {
        height:40,
        width:40,
    },
    result: {
        color: theme.colors.white,
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.md,
 
        textAlign: 'center',
    },
})