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
} from 'react-native';


import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.

import * as S from './style.js'

const HomeScreen = ({navigation}) => {
  return (
    
    <SafeAreaProvider style={S.stylesHomeScreen.container}>

      <View>
        <Text style={S.stylesWelcomeText.text}>Bem-vindo ao Churrascando!!!</Text>
      </View>

      <View style={S.stylesMainView.container}>
        <Text style={S.stylesMainView.text}>Faça seu Cálculo</Text>

        <Pressable style={S.stylesPressableStart.container}onPress={() => navigation.navigate('Organizador')}>
          <Text style={S.stylesPressableStart.text}>Começar</Text>
        </Pressable>
      </View>


    </SafeAreaProvider>

  );

};

export default HomeScreen;