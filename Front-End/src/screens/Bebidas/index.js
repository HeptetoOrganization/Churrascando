import { useState } from 'react';

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
import { ChevronRight, Import } from 'lucide-react-native';

import * as S from './style.js'

import SelectItem from '../../components/SelectItem';


const DrinksScreen = ({navigation}) => {

    return(
    <SafeAreaProvider style={S.stylesDrinksScreen.container}>
        <ScrollView>

        <View>
            <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
        </View>

        <View style={S.stylesField.container}>
            <SelectItem/>
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

export default DrinksScreen