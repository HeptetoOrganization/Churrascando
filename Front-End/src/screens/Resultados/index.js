// ResultsScreen.js
import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as S from './style.js';
import { ChevronRight } from 'lucide-react-native';
import ResultItem from '../../components/ResultItem/index.js';
import Calculadora from '../../Calculo/Calculadora.js';

const ResultsScreen = () => {
    const navigation = useNavigation();

    const CalculadoraData = {
        // Dados de entrada para a calculadora
    };

    const {
        valorAdulto,
        valorTotal,
        valorTotalC,
        valorTotalA,
        valorTotalB,
        valorTotalO,
        valorTotalL,
        // Outros dados calculados
    } = Calculadora(CalculadoraData);

    const source = {
        // Sources dos itens
    };

    const handleNextPress = () => {
        navigation.navigate('SideDishes');
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
                    <ResultItem width={'35%'} value={'Boi'} src={source.boi}/>
                    <ResultItem width={'35%'} value={'Frango'} src={source.frango}/>
                    <ResultItem width={'35%'} value={'Porco'} src={source.porco}/>
                </View>

                {/* Acompanhamentos */}
                <View style={S.stylesField.container}>
                    <Text style={S.stylesField.title}>Acompanhamentos:</Text>
                    {/* Renderizar itens de acompanhamento com ResultItem */}
                </View>

                {/* Bebidas */}
                <View style={S.stylesField.container}>
                    <Text style={S.stylesField.title}>Bebidas:</Text>
                    {/* Renderizar itens de bebida com ResultItem */}
                </View>

                {/* Outros */}
                <View style={S.stylesField.container}>
                    <Text style={S.stylesField.title}>Outros:</Text>
                    {/* Renderizar outros itens com ResultItem */}
                </View>

            </ScrollView>

            {/* Botão Próximo */}
            <Pressable style={S.stylesViewNext.container} onPress={handleNextPress}>
                <Text style={S.stylesPressableNext.text}>
                    <ChevronRight color="#fff" size={40} strokeWidth={2.0}/>
                </Text>
            </Pressable>
        </SafeAreaProvider>
    );
}

export default ResultsScreen;
