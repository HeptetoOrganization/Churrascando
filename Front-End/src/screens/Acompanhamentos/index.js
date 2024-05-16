import { 
    Text, 
    View, 
    Pressable, // Botão Personalizado
    ScrollView,
    Alert,
} from 'react-native';
  
import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.
  
// Icon
import { ChevronRight } from 'lucide-react-native';
  
import * as S from './style.js'
  
import SelectSideDish from '../../components/SelectSideDish/index.js';

  
const SideDishScreen = ({navigation}) => {

    return(
    <SafeAreaProvider style={S.stylesSideDishScreen.container}>
        <ScrollView>

        <View>
            <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
        </View>

        <View style={S.stylesOptions.container}>
            <Text style={S.stylesOptions.title}>Acompanhamentos</Text>
            <SelectSideDish/>
        </View>

        </ScrollView>

        <View style={S.stylesViewNext.container}>
            <Pressable style={S.stylesPressableNext.container}onPress={() => navigation.navigate('Resultados')}>
                <Text style={S.stylesPressableNext.text}>
                    <ChevronRight color="#fff" size={40} strokeWidth={2.0}/>
                </Text>
            </Pressable>
        </View>

    </SafeAreaProvider>
    )   
}

export default SideDishScreen