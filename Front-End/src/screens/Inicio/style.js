import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

// criando  a estilização do componente de acordo com as informações passadas por parâmetro.
//  TELA HOME
export const stylesHomeScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.ginger_cream,
        padding: theme.spacing.lg, // espaçamento entre os componentes internos

        //alignItems: 'center', 
        justifyContent: 'space-evenly', // alinhamento dos itens
    },

})
export const stylesWelcomeText = StyleSheet.create({
    text: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.xl,
        color: theme.colors.chinese_black,
        marginBottom: theme.spacing.lg,
        textAlign: 'center',
    },
})
export const stylesMainView = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.peach_nougat,
        padding: theme.spacing.lg,
        borderRadius: theme.borderRadius.radius,
    },
    text: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.xl,
        color: theme.colors.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',
    },
})

export const stylesPressableStart = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.marquis_orange,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.sm,
        borderRadius: theme.borderRadius.radius,
    },
    text: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.xl,
        color: theme.colors.white,
        textAlign: 'center',
    } 
})

export const stylesCheck = StyleSheet.create({
    checkbox: {
        alignSelf: 'center',
      },
})



// Botão Lixeira Delete
// export const stylesButtonDelete = StyleSheet.create({
//     button: {
//         //borderRadius: theme.borderRadius.button,
//     },
//     image:{
//     //resizeMode: 'contain',
//         height:25, 
//         width:25,
//     },

//     // ios
//     shadowProp: {
//         shadowColor: '#171717',
//         shadowOffset: {width: -2, height: 4},
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//     },    
// })
// //    |
// // Botões
// export const stylesButtonImage = StyleSheet.create({
//     // padding:{
//     // paddingLeft: theme.spacing.sm,
//     // },   
// })