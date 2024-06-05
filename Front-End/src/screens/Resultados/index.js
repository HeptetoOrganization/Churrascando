import { 
    Text, 
    View, 
    Pressable, // Botão Personalizado
    ScrollView,
    Alert,
} from 'react-native';

import Calculadora from '../../Calculo/Calculadora.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.
  
// Icon
import { ChevronRight } from 'lucide-react-native';
  
import * as S from './style.js'

import ResultItem from '../../components/ResultItem/index.js';

// const CalculadoraData = Calculadora
const ResultsScreen = ({ route, navigation }) => {
  

  const {
    carnesSelecionadas,
    bebidasSelecionadas,
    acompanhamentosSelecionados,
    organizador,
    numHomens,
    numMulheres,
    numCriancas,
    endereco,
    valorLocacao,
  } = route.params;

  const resultados = Calculadora({
    Homem: numHomens,
    Mulher: numMulheres,
    Crianca: numCriancas,
    Carne: carnesSelecionadas,
    Acompanhamento: acompanhamentosSelecionados,
    Bebida: bebidasSelecionadas,
    Outros: ["Carvão", "Gelo", "Sal Grosso"], // Exemplos, ajuste conforme necessário
    Locacao: valorLocacao,
  });

  const source = {
    // Carnes
    boi: require("../../assets/boi.png"),
    frango: require("../../assets/frango.png"),
    porco: require("../../assets/porco.png"),

    // Bebidas
    suco: require("../../assets/suco.png"),
    agua: require("../../assets/agua.png"),
    refri: require("../../assets/refrigerante.png"),
    cerveja: require("../../assets/cerveja.png"),

    // Acompanhamentos
    pao_alho: require("../../assets/pao-alho.png"),
    pao_frances: require("../../assets/pao-sal.png"),
    farofa: require("../../assets/farofa.png"),
    queijo_coalho: require("../../assets/queijo-coalho.png"),
    arroz: require("../../assets/arroz.png"),

    // Gelo
    gelo: require("../../assets/gelo.png"),

    // Carvão
    carvao: require("../../assets/carvao.png"),

    //Sal
    sal: require("../../assets/sal.png"),

    //Locação
    locacao: require("../../assets/locacao.png"),
  };

  return (
    <SafeAreaProvider style={S.stylesDrinksScreen.container}>
      <ScrollView>
        <View>
          <Text style={S.stylesMainTitle.text}>Resultado</Text>
        </View>

        {/* Tipo de carne */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Tipo de carne:</Text>
          <ResultItem
            width={"35%"}
            value={`Boi: ${resultados.kgBoi?.toFixed(2) || "0.00"} kg`}
            src={source.boi}
          />
          <ResultItem
            width={"35%"}
            value={`Frango: ${resultados.kgFrango?.toFixed(2) || "0.00"} kg`}
            src={source.frango}
          />
          <ResultItem
            width={"35%"}
            value={`Porco: ${resultados.kgPorco?.toFixed(2) || "0.00"} kg`}
            src={source.porco}
          />
        </View>

        {/* Acompanhamentos: */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Acompanhamentos:</Text>
          <ResultItem
            width={"35%"}
            value={`Pão de Alho: ${
              resultados.tPaoAlho?.toFixed(2) || "0.00"
            } kg`}
            src={source.pao_alho}
          />
          <ResultItem
            width={"35%"}
            value={`Pão Francês: ${resultados.tPao?.toFixed(2) || "0.00"} kg`}
            src={source.pao_frances}
          />
          <ResultItem
            width={"35%"}
            value={`Farofa: ${resultados.tFarofa?.toFixed(2) || "0.00"} kg`}
            src={source.farofa}
          />
          <ResultItem
            width={"35%"}
            value={`Queijo Coalho: ${
              resultados.tQueijo?.toFixed(2) || "0.00"} kg`}
            src={source.queijo_coalho}
          />
          <ResultItem
            width={"35%"}
            value={`Arroz: ${resultados.tArroz?.toFixed(2) || "0.00"} kg`}
            src={source.arroz}
          />
        </View>

        {/* Bebidas: */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Bebidas:</Text>
          <ResultItem
            width={"35%"}
            value={`Suco: ${resultados.mlSuco?.toFixed(2) || "0.00"} L`}
            src={source.suco}
          />
          <ResultItem
            width={"35%"}
            value={`Água: ${resultados.mlAgua?.toFixed(2) || "0.00"} L`}
            src={source.agua}
          />
          <ResultItem
            width={"35%"}
            value={`Refrigerante: ${
              resultados.mlRefri?.toFixed(2) || "0.00"
            } L`}
            src={source.refri}
          />
          <ResultItem
            width={"35%"}
            value={`Cerveja: ${resultados.mlCerveja?.toFixed(2) || "0.00"} L`}
            src={source.cerveja}
          />
        </View>

        {/* Gelo: */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Gelo:</Text>
          <ResultItem
            width={"35%"}
            value={`Gelo: ${resultados.kgGelo?.toFixed(2) || "0.00"} kg`}
            src={source.gelo}
          />
        </View>

        {/* Carvão: */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Carvão:</Text>
          <ResultItem
            width={"35%"}
            value={`Carvão: ${resultados.kgCarvao?.toFixed(2) || "0.00"} kg`}
            src={source.carvao}
          />
        </View>

        {/* Sal: */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Sal:</Text>
          <ResultItem
            width={"35%"}
            value={`Sal Grosso: ${resultados.kgSalG?.toFixed(2) || "0.00"} kg`}
            src={source.sal}
          />
        </View>

        {/* Locação: */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Locação:</Text>
          <ResultItem
            width={"35%"}
            value={`Locação: R$ ${resultados.valorTotalL || "0.00"}`}
            src={source.locacao}
          />
        </View>

        {/* Total: */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Total:</Text>
          <ResultItem
            width={"35%"}
            value={`Total: R$ ${resultados.valorTotal || "0.00"}`}
            src={source.locacao}
          />
        </View>
      </ScrollView>

      <View style={S.stylesViewNext.container}>
        <Pressable
          style={S.stylesPressableNext.container}
          onPress={() => navigation.navigate("Acompanhamentos")}
        >
          <Text style={S.stylesPressableNext.text}>
            <ChevronRight color="#fff" size={40} strokeWidth={2.0} />
          </Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
};

export default ResultsScreen