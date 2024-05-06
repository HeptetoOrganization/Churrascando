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
import GuestComponent from '../../components/GuestComponent/index.js';
import OrganizerComponents from '../../components/OrganizerComponents/index.js';

const OrganizerScreen = ({navigation}) => {

  const organizador = {}
  const endereco = {
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
  }
  const adultos = {
    homens: '',
    mulheres: '',
  }
  // const homens = {}
  // const mulheres = {}
  const criancas = {}
  const locacao = {}


  const source = {
    mulher: require('../../assets/mulher.png'),
    homem: require('../../assets/homem.png'),
    criancas: require('../../assets/criancas.png'),
  }
    return (
    
        <SafeAreaProvider style={S.stylesOrganizerScreen.container}>
        <ScrollView>

          <View>
            <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
          </View>

          
          {/* Organizador */}
          <View style={S.stylesField.container}>
            <Text style={S.stylesField.title}>{'Organizador(a):'}</Text>
            <OrganizerComponents width={'51%'} text={'Quem irá organizar?'} value={organizador} maxLen={20}/>
          </View>

          {/* Convidados */}
          <View style={S.stylesField.container}>
            <Text style={S.stylesField.title}>Convidados:</Text>
            <GuestComponent src={source.homem} text={'Qtd. de homens'} value={adultos.homens} maxLen={4} inputMode={'numeric'}/>
            <GuestComponent src={source.mulher} text={'Qtd. de mulheres'} value={adultos.mulheres} maxLen={4} inputMode={'numeric'}/>
            <GuestComponent src={source.criancas} text={'Qtd. de crianças'} value={criancas} maxLen={4} inputMode={'numeric'}/>
          </View>

          {/* Locação */}
          <View style={S.stylesField.container}>
            <Text style={S.stylesField.title}>Locação:</Text>
            <OrganizerComponents width={'75%'} text={'Endereço:'} value={endereco.logradouro}/>
            <OrganizerComponents width={'50%'} text={'Número:'} value={endereco.numero} inputMode={'numeric'}/>
            <OrganizerComponents width={'50%'} text={'Bairro:'} value={endereco.bairro}/>
            <OrganizerComponents width={'50%'} text={'Cidade:'} value={endereco.cidade}/>
            <OrganizerComponents width={'30%'} text={'Estado:'} value={endereco.uf} maxLen={2} textTransform={'uppercase'}/>
            <OrganizerComponents width={'35%'} text={'Valor de aluguel do espaço:'} value={locacao} inputMode={'decimal'}/>

          </View>
          
        </ScrollView>

          <View style={S.stylesViewNext.container}>
            <Pressable style={S.stylesPressableNext.container}onPress={() => navigation.navigate('Carnes')}>
              <Text style={S.stylesPressableNext.text}>{'>'}</Text>
            </Pressable>
          </View>
    
        </SafeAreaProvider>
    
      );
}

export default OrganizerScreen