import React, { useState, useEffect } from 'react';

//import { Loading } from '../../components/Loading';

import { 
  Text, 
  View, 
  ActivityIndicator, // spinner
  TextInput, 
  Pressable, // Botão Personalizado
  Image,
  FlatList,
  ScrollView,
  Alert,
  Button,
  
} from 'react-native';


import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.

import * as S from './style.js'

const OrganizerScreen = ({navigation}) => {
    return (
    
        <SafeAreaProvider style={S.stylesOrganizerScreen.container}>
    
          <View>
            <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
          </View>

          
          {/* Organizador */}
          <View style={S.stylesField.container}>
            <Text style={S.stylesField.title}>{'Organizador(a):'}</Text>
          </View>

          {/* Convidados */}
          <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Convidados:</Text>
          </View>

          {/* Locação */}
          <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Locação:</Text>
          </View>
    
          <View style={S.stylesViewNext.container}>
            <Pressable style={S.stylesPressableNext.container}onPress={() => navigation.navigate('Carnes')}>
              <Text style={S.stylesPressableNext.text}>{'>'}</Text>
            </Pressable>
          </View>
    
    
        </SafeAreaProvider>
    
      );
}

export default OrganizerScreen