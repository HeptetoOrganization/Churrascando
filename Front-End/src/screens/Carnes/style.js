import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const stylesMeatScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.ginger_cream,
        padding: theme.spacing.lg,
        paddingBottom: 60,
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
    },
    title: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.lg,
        color: theme.colors.chinese_black,
        marginBottom: theme.spacing.lg,
        textAlign: 'left',
    },

})

export const stylesMeats= StyleSheet.create({
    container: {
        gap: 25,
    },
})
export const stylesMeatOptions= StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        //gap: 20,
    },
})
export const stylesCheckbox = StyleSheet.create({
    container: {
        display: 'flex',
        gap: -20,
    },
})
export const stylesCheckItem = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: -15,
    },
    text: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.md,
        color: theme.colors.chinese_black,
    }
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
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    } 
})