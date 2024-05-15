import { useState } from 'react';

import { 
  Text, 
  View, 
} from 'react-native';

//import * as S from './style.js'
import { ToggleButton } from 'react-native-paper';
//import { theme } from '../../theme/index.js';

export default function SelectItem({}) {

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
        <View>
            <ToggleButton
                icon="bluetooth"
                value="bluetooth"
                status={bebidas.includes("bluetooth") ? 'checked' : 'unchecked'}
                onPress={() => onButtonToggle("bluetooth")}
            />
            <ToggleButton
                icon="camera"
                value="camera"
                status={bebidas.includes("camera") ? 'checked' : 'unchecked'}
                onPress={() => onButtonToggle("camera")}
            />
            <Text>Selecionados: {bebidas.join(', ')}</Text>
        </View>
      )
    
}