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

import SelectDrinks from '../../components/SelectDrinks';
import OrganizerComponents from '../../components/OrganizerComponents/index.js';


const DrinksScreen = ({navigation}) => {

    const qtd_bebem = {}

    return(
    <SafeAreaProvider style={S.stylesDrinksScreen.container}>
        <ScrollView>

        <View>
            <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
        </View>

        <View style={S.stylesOptions.container}>
            <Text style={S.stylesOptions.title}>Bebidas:</Text>
            <SelectDrinks/>
        </View>

        {/* Organizador */}
        <View style={S.stylesField.container}>
            <Text style={S.stylesField.title}>Bebidas Alcólicas:</Text>
            <OrganizerComponents width={'35%'} text={'Quantas pessoas bebem?'} value={qtd_bebem} maxLen={4} inputMode={'numeric'}/>
        </View>

        </ScrollView>

        <View style={S.stylesViewNext.container}>
            <Pressable style={S.stylesPressableNext.container}onPress={() => navigation.navigate('Acompanhamentos')}>
                <Text style={S.stylesPressableNext.text}>
                    <ChevronRight color="#fff" size={40} strokeWidth={2.0}/>
                </Text>
            </Pressable>
        </View>

    </SafeAreaProvider>
    )
    
}

export default DrinksScreen