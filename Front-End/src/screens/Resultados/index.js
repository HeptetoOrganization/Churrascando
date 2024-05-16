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

import ResultItem from '../../components/ResultItem/index.js';

const ResultsScreen = () => {

    const source = {
        // Carnes
        boi: require('../../assets/boi.png'),
        frango: require('../../assets/frango.png'),
        porco: require('../../assets/porco.png'),

        // Bebidas
        suco: require('../../assets/suco.png'),
        agua: require('../../assets/agua.png'),
        refri: require('../../assets/refrigerante.png'),
        cerveja: require('../../assets/cerveja.png'),

        // Acompanhamentos
        pao_alho: require('../../assets/pao-alho.png'),
        pao_frances: require('../../assets/pao-sal.png'),
        farofa: require('../../assets/farofa.png'),
        queijo_coalho: require('../../assets/queijo-coalho.png'),
        arroz: require('../../assets/arroz.png'),

        // Gelo
        gelo: require('../../assets/gelo.png'),

        // Carvão
        carvao: require('../../assets/carvao.png'),

        //Sal
        sal: require('../../assets/sal.png'),

        //Locação
       locacao: require('../../assets/locacao.png'),
        
      }
    
    return(
        <SafeAreaProvider style={S.stylesDrinksScreen.container}>
            <ScrollView>
    
            <View>
                <Text style={S.stylesMainTitle.text}>Resultado</Text>
            </View>
    
            {/* Tipo de carne */}
            <View style={S.stylesField.container}>
                <Text style={S.stylesField.title}>Tipo de carne:</Text>
                <ResultItem width={'35%'} value={'pessoas bebem?'} src={source.agua}/>
            </View>

            {/* Acompanhamentos: */}
            <View style={S.stylesField.container}>
                <Text style={S.stylesField.title}>Acompanhamentos:</Text>
                <ResultItem width={'35%'} value={'Quantas pessoas bebem?'}/>
            </View>

            {/* Bebidas: */}
            <View style={S.stylesField.container}>
                <Text style={S.stylesField.title}>Bebidas:</Text>
                <ResultItem width={'35%'} value={'Quantas pessoas bebem?'}/>
            </View>

            {/* Gelo: */}
            <View style={S.stylesField.container}>
                <Text style={S.stylesField.title}>Gelo:</Text>
                <ResultItem width={'35%'} value={'Quantas pessoas bebem?'}/>
            </View>

            {/* Carvão: */}
            <View style={S.stylesField.container}>
                <Text style={S.stylesField.title}>Carvão:</Text>
                <ResultItem width={'35%'} value={'Quantas pessoas bebem?'}/>
            </View>

            {/* Sal: */}
            <View style={S.stylesField.container}>
                <Text style={S.stylesField.title}>Sal:</Text>
                <ResultItem width={'35%'} value={'Quantas pessoas bebem?'}/>
            </View>

            {/* Locação: */}
            <View style={S.stylesField.container}>
                <Text style={S.stylesField.title}>Locação:</Text>
                <ResultItem width={'35%'} value={'Quantas pessoas bebem?'}/>
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

export default ResultsScreen