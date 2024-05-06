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

        justifyContent: 'space-between',
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
 
        textAlign: 'left',
    },
    viewInput: {
        display: 'flex',
        //width: '51%',
        height: 40,
        paddingHorizontal: 8,

        backgroundColor: theme.colors.brown_yellow,
        borderRadius: theme.borderRadius.radius,
        justifyContent: 'center',
    },
    input: {
        color: theme.colors.white,
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.md,
 
        textAlign: 'center',
    },
})