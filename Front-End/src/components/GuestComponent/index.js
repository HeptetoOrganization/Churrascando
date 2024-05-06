import { 
  Text, 
  View, 
  TextInput, 
  Image,
  Alert,
} from 'react-native';

import * as S from './style.js'

import React, { useState } from 'react';


export default function GuestComponent({src, text, value, maxLen, inputMode}) {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (value) => {
    setInputValue(value);
  }

 return (
    <View style={S.stylesComponent.container}>
      <View style={S.stylesComponent.viewImage}>
        <Image source={src} style={S.stylesComponent.image}/>
        <Text style={S.stylesComponent.text}>{text}</Text>
      </View>

      <View style={S.stylesComponent.viewInput}>
        <TextInput
          value={inputValue}
          onChangeText={handleChange}
          style={S.stylesComponent.input}
          maxLength={maxLen}
          inputMode={inputMode}
          required
        />
      </View>
       {/* <Text>{inputValue}</Text> */}
    </View>
 )
}
