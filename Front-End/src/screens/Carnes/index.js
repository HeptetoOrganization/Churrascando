import React, { useState, useEffect } from 'react';

//import { Loading } from '../../components/Loading';

import { 
  Text, 
  View, 
  Pressable, // Botão Personalizado
  ScrollView,
  Alert,
} from 'react-native';


import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.

// Icon
import { ChevronRight } from 'lucide-react-native';

import * as S from './style.js'
import IconItem from '../../components/IconItem/index.js';

const MeatScreen = ({navigation}) => {

    const images = {
        boi: require('../../assets/boi.png'),
        frango: require('../../assets/frango.png'),
        porco: require('../../assets/porco.png')
    }

    return (
        <SafeAreaProvider style={S.stylesMeatScreen.container}>
            <ScrollView>

                <View>
                    <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
                </View>

                
                {/* Tipo de carne */}
                <View style={S.stylesField.container}>
                    <Text style={S.stylesField.title}>Tipo de Carne:</Text>

                    <View style={S.stylesMeats.container}>

                        {/* Bovina */}
                        <View style={S.stylesMeatOptions.container}>
                            <IconItem src={images.boi}/>
                            <Text style={S.stylesField.title}>Op</Text>
                        </View>

                        {/* Frango */}
                        <View style={S.stylesMeatOptions.container}>
                            <IconItem src={images.frango}/>
                            <Text style={S.stylesField.title}>Op</Text>
                        </View>

                        {/* Suína */}
                        <View style={S.stylesMeatOptions.container}>
                            <IconItem src={images.porco}/>
                            <Text style={S.stylesField.title}>Op</Text>
                        </View>

                    </View>
                </View>

            </ScrollView>

            <View style={S.stylesViewNext.container}>
                <Pressable style={S.stylesPressableNext.container}onPress={() => navigation.navigate('Bebidas')}>
                    <Text style={S.stylesPressableNext.text}>
                        <ChevronRight color="#fff" size={40} strokeWidth={2.0}/>
                    </Text>
                </Pressable>
            </View>

        </SafeAreaProvider>
    )
    
}

export default MeatScreen