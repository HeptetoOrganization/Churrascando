import { 
    View, 
    Image,
  } from 'react-native';
  
  import * as S from './style.js'
  
  export default function IconItem({src}) {
    return (
        <View style={S.stylesComponent.container}>
            <Image source={src} style={S.stylesComponent.image}/>
        </View>
    )
  }