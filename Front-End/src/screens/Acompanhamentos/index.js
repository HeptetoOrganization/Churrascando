import { 
    Text, 
    View, 
    Pressable, // Botão Personalizado
    ScrollView,
    Alert,
} from 'react-native';
import { useState } from "react";
  
import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.
  
// Icon
import { ChevronRight } from 'lucide-react-native';
  
import * as S from './style.js'
  
import SelectSideDish from '../../components/SelectSideDish/index.js';

  
const SideDishScreen = ({ navigation, route }) => {
  const [acompanhamentos, setAcompanhamentos] = useState([]);

  const handleNextPress = () => {
    navigation.navigate("Resultados", {
      acompanhamentosSelecionados: acompanhamentos,
      bebidasSelecionadas: route.params.bebidasSelecionadas,
      carnesSelecionadas: route.params.carnesSelecionadas,
      organizador: route.params.organizador,
      numHomens: route.params.numHomens,
      numMulheres: route.params.numMulheres,
      numCriancas: route.params.numCriancas,
      endereco: route.params.endereco,
      valorLocacao: route.params.valorLocacao,
    });
  };

  // No Pressable
  <Pressable style={S.stylesPressableNext.container} onPress={handleNextPress}>
    <Text style={S.stylesPressableNext.text}>
      <ChevronRight color="#fff" size={40} strokeWidth={2.0} />
    </Text>
  </Pressable>;

 return(
        <SafeAreaProvider style={S.stylesSideDishScreen.container}>
            <ScrollView>
                <View>
                    <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
                </View>
                <View style={S.stylesOptions.container}>
                    <Text style={S.stylesOptions.title}>Acompanhamentos</Text>
                    <SelectSideDish onSelect={setAcompanhamentos} />
                </View>
            </ScrollView>
            <View style={S.stylesViewNext.container}>
                <Pressable style={S.stylesPressableNext.container} onPress={handleNextPress}>
                    <Text style={S.stylesPressableNext.text}>
                        <ChevronRight color="#fff" size={40} strokeWidth={2.0} />
                    </Text>
                </Pressable>
            </View>
        </SafeAreaProvider>
    );
}

export default SideDishScreen;