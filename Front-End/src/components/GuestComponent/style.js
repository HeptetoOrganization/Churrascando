import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const stylesComponent = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        padding: 5,
        //height: 20, 
        backgroundColor: theme.colors.peach_nougat,
        borderRadius: theme.borderRadius.radius,

//paddingHorizontal: theme.spacing.md,
        //justifyContent: 'space-between',
    },
    // titulo
    text: {
        color: theme.colors.chinese_black, // cor da fonte
        fontFamily: theme.font_family.regular, // fonte
        fontSize: theme.font_size.md, // tamanho da fonte
        //marginBottom: theme.spacing.lg,
 
        textAlign: 'left',
    },
    image:{
        height:50,
        width:50,
    },
})