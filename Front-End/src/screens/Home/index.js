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

const HomeScreen = ({navigation}) => {

  return (
    
    <SafeAreaProvider>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <Button
        title="Go to Organizer"
        onPress={() => navigation.navigate('Organizador')}
        />

      </View>

    </SafeAreaProvider>

  );

};

export default HomeScreen;