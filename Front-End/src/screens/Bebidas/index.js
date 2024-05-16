import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as S from './style.js';
import { ChevronRight } from 'lucide-react-native';

const DrinksScreen = () => {
  const navigation = useNavigation();
  const [qtdBebem, setQtdBebem] = useState('');

  const handleNextPress = () => {
    navigation.navigate('Sides', {
      qtdBebem: qtdBebem
    });
  };

  return (
    <SafeAreaProvider style={S.stylesDrinksScreen.container}>
      <ScrollView>
        <View>
          <Text style={S.stylesMainTitle.text}>Escolha as Bebidas</Text>
        </View>

        {/* Seleção de Bebidas */}
        <View style={S.stylesOptions.container}>
          <Text style={S.stylesOptions.title}>Bebidas:</Text>
          {/* Componente para selecionar bebidas */}
          <SelectDrinks />
        </View>

        {/* Bebidas Alcóolicas */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Bebidas Alcóolicas:</Text>
          <OrganizerComponents
            width={'35%'}
            text={'Quantas pessoas bebem?'}
            value={qtdBebem}
            maxLen={4}
            inputMode={'numeric'}
            onChangeText={setQtdBebem}
          />
        </View>

      </ScrollView>

      {/* Botão Próximo */}
      <Pressable style={S.stylesViewNext.container} onPress={handleNextPress}>
        <Text style={S.stylesPressableNext.text}>
          <ChevronRight color="#fff" size={40} strokeWidth={2.0}/>
        </Text>
      </Pressable>
    </SafeAreaProvider>
  );
}

export default DrinksScreen;
