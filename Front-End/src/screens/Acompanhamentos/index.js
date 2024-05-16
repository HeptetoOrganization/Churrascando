// SideDishScreen.js
import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as S from './style.js';
import { ChevronRight } from 'lucide-react-native';
import SelectSideDish from '../../components/SelectSideDish/index.js';

const SideDishScreen = () => {
    const navigation = useNavigation();

    const handleNextPress = () => {
        navigation.navigate('Results');
    };

    return (
        <SafeAreaProvider style={S.stylesSideDishScreen.container}>
            <ScrollView>
                <View>
                    <Text style={S.stylesMainTitle.text}>Escolha os Acompanhamentos</Text>
                </View>

                {/* Seleção de Acompanhamentos */}
                <View style={S.stylesOptions.container}>
                    <Text style={S.stylesOptions.title}>Acompanhamentos</Text>
                    {/* Componente para selecionar acompanhamentos */}
                    <SelectSideDish />
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

export default SideDishScreen;
