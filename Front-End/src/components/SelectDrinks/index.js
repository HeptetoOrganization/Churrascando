import { useState } from 'react';

import { 
  Text, 
  View, 
  Image,
  Pressable,
} from 'react-native';

import * as S from './style.js'
import { theme } from '../../theme/index.js';

export default function SelectDrinks({}) {

    const [bebidas, setBebidas] = useState([]);

      const onButtonToggle = (value) => {
        setBebidas(prevBebidas => {
          if (prevBebidas.includes(value)) {
            // Se o valor já está no array, remova-o
            return prevBebidas.filter(bebida => bebida !== value);
          } else {
            // Caso contrário, adicione o valor ao array
            return [...prevBebidas, value];
          }
        });
      };

      return(
        <View style={S.stylesComponent.container}>
          <View style={S.stylesComponent.buttonGroup}>
            {/* Suco */}
            <Pressable
              onPress={() => onButtonToggle("Suco")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                bebidas.includes("Suco") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/suco.png')} style={S.stylesComponent.image} />
            </Pressable>
            
            {/* Água */}
            <Pressable
              onPress={() => onButtonToggle("Água")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                bebidas.includes("Água") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/agua.png')} style={S.stylesComponent.image} />
            </Pressable>
          </View>

          <View style={S.stylesComponent.buttonGroup}>
            {/* Refrigerante */}
            <Pressable
              onPress={() => onButtonToggle("Refrigerante")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                bebidas.includes("Refrigerante") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/refrigerante.png')} style={S.stylesComponent.image} />
            </Pressable>
            
            {/* Cerveja */}
            <Pressable
              onPress={() => onButtonToggle("Cerveja")}
              style={({ pressed }) => [
                { backgroundColor: pressed ?  theme.colors.brown_yellow : theme.colors.peach_nougat, },
                S.stylesComponent.button,
                bebidas.includes("Cerveja") && S.stylesComponent.buttonSelected
              ]}
            >
              <Image source={require('../../assets/cerveja.png')} style={S.stylesComponent.image} />
            </Pressable>
          </View>
          
          {/* <Text>Selecionados: {bebidas.join(', ')}</Text> */}
        </View>
      )
    
}