import { 
  Text, 
  View, 
  TextInput, 
  Alert,
} from 'react-native';

import * as S from './style.js'

import { useState } from 'react';


export default function OrganizerComponents({text, width, maxLen, textTransform, inputMode}) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (value) => {
    setInputValue(value);
  }

 return (
    <View style={S.stylesComponent.container}>
      <View style={S.stylesComponent.viewText}>
        <Text style={S.stylesComponent.text}>{text}</Text>
      </View>

      <View style={[S.stylesComponent.viewInput, { width }]}>
        <TextInput
          value={inputValue}
          onChangeText={handleChange}
          style={[S.stylesComponent.input, { textTransform }]}
          maxLength={maxLen}
          inputMode={inputMode}
          required
        />
      </View>
      {/* <Text>{inputValue}</Text> */}
    </View>
 )
}
