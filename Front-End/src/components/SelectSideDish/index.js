import { useState } from 'react';

import { 
  Text, 
  View, 
  Image,
  Pressable,
} from 'react-native';

import * as S from './style.js'
import { theme } from '../../theme/index.js';

export default function SelectSideDish({}) {

    const [acompanhamentos, setAcompanhamentos] = useState([]);

      const onButtonToggle = (value) => {
        setAcompanhamentos(prevAcompanhamentos => {
          if (prevAcompanhamentos.includes(value)) {
            // Se o valor já está no array, remova-o
            return prevAcompanhamentos.filter(acompanhamento => acompanhamento !== value);
          } else {
            // Caso contrário, adicione o valor ao array
            return [...prevAcompanhamentos, value];
          }
        });
      };

      return(
        <View style={S.stylesComponent.container}>
          <View style={S.stylesComponent.buttonGroup}>
            {/* Pão de Alho */}
            <Pressable
              onPress={() => onButtonToggle("Pão de Alho")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                acompanhamentos.includes("Pão de Alho") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/pao-alho.png')} style={S.stylesComponent.image} />
            </Pressable>
            
            {/* Pão Francês / de sal */}
            <Pressable
              onPress={() => onButtonToggle("Pão Francês")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                acompanhamentos.includes("Pão Francês") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/pao-sal.png')} style={S.stylesComponent.image} />
            </Pressable>
          </View>

          <View style={S.stylesComponent.buttonGroup}>
            {/* Farofa */}
            <Pressable
              onPress={() => onButtonToggle("Farofa")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                acompanhamentos.includes("Farofa") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/farofa.png')} style={S.stylesComponent.image} />
            </Pressable>
            
            {/* Queijo Coalho */}
            <Pressable
              onPress={() => onButtonToggle("Queijo Coalho")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                acompanhamentos.includes("Queijo Coalho") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/queijo-coalho.png')} style={S.stylesComponent.image} />
            </Pressable>
          </View>

          <View style={S.stylesComponent.buttonGroupLast}>
            {/* Arroz */}
            <Pressable
              onPress={() => onButtonToggle("Arroz")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                acompanhamentos.includes("Arroz") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/arroz.png')} style={S.stylesComponent.image} />
            </Pressable>
          </View>
          
          <Text>Selecionados: {acompanhamentos.join(', ')}</Text>
        </View>
      )
    
}