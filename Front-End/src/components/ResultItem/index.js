import { 
  Text, 
  View, 
  Image,
  Alert,
} from 'react-native';

import * as S from './style.js'

import { useState } from 'react';


export default function ResultItem({src, value}) {

  // const [inputValue, setInputValue] = useState('');

  // const handleChange = (value) => {
  //   setInputValue(value);
  // }

 return (
    <View style={S.stylesComponent.container}>
      <View style={[S.stylesComponent.viewImage]}>
        <Image source={src} style={S.stylesComponent.image}/>
      </View>

      <View style={S.stylesComponent.viewText}>
        <Text style={S.stylesComponent.text}>{value}</Text>
      </View>
    </View>
 )
}
