import { 
  Text, 
  View, 
  TextInput, 
  Image,
  Alert,
} from 'react-native';

import * as S from './style.js'


export default function GuestComponent({src, text, value}) {
 return (
    <View style={S.stylesComponent.container}>
        <Image source={src} style={S.stylesComponent.image}/>
        <Text style={S.stylesComponent.text}>{text}</Text>
        <TextInput
            maxLength={4}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    </View>
 )
}
