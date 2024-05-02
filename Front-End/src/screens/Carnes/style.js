import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const stylesOrganizerScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.ginger_cream,
        padding: theme.spacing.lg, // espaçamento entre os componentes internos

        //alignItems: 'center', 
        //justifyContent: 'space-evenly', // alinhamento dos itens
    },

})
export const stylesMainTitle = StyleSheet.create({
    text: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.xl,
        color: theme.colors.chinese_black,
        marginBottom: theme.spacing.lg,
        textAlign: 'center',
    },
})

export const stylesField = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.ginger_cream,
        padding: theme.spacing.lg, // espaçamento entre os componentes internos

        //alignItems: 'center', 
        //justifyContent: 'space-evenly', // alinhamento dos itens
    },
    title: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.lg,
        color: theme.colors.chinese_black,
        marginBottom: theme.spacing.lg,
        textAlign: 'left',
    },

})



// Botão próxima tela
export const stylesViewNext = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.marquis_orange,
        width: 50,
        height: 50,
        paddingVertical: theme.spacing.xs,
        borderRadius: 100,

        position: 'absolute',
        bottom: 40,
        right: 30,
        alignSelf: 'flex-end',

        //justifyContent: 'center',
    },
    text: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.xl,
        color: theme.colors.white,
        textAlign: 'center',
    } 
})
export const stylesPressableNext = StyleSheet.create({
    container: {
        // position: 'absolute',
        // //marginBottom: theme.spacing.lg,
        // bottom: 20,

        // backgroundColor: theme.colors.marquis_orange,
        // paddingVertical: theme.spacing.xs,
        // width: 50,
        // //height: 50,
        // borderRadius: '100%',
        justifyContent: 'center',
    },
    text: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.xl,
        color: theme.colors.white,
        textAlign: 'center',
    } 
})