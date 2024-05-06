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
    viewImage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    image:{
        height:40,
        width:40,
    },
    // titulo
    text: {
        color: theme.colors.white, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.sm, // tamanho da fonte
 
        textAlign: 'left',
    },
    viewInput: {
        display: 'flex',
        width: '35%',
        height: 40,
        paddingHorizontal: 8,

        backgroundColor: theme.colors.brown_yellow,
        borderRadius: theme.borderRadius.radius,
        justifyContent: 'center',
    },
    input: {
        color: theme.colors.white, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.md, // tamanho da fonte
 
        textAlign: 'center',
    },
})