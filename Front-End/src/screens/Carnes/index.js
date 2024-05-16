import { useState } from 'react';

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
import { theme } from '../../theme/index.js';
import IconItem from '../../components/IconItem/index.js';
import { Checkbox } from 'react-native-paper';


const MeatScreen = ({navigation}) => {

    const images = {
        boi: require('../../assets/boi.png'),
        frango: require('../../assets/frango.png'),
        porco: require('../../assets/porco.png')
    }

    // Escolha de carnes
    const [carne, setCarne] = useState([]);
    const handleCheckboxPress = (value) => {
        if (carne.includes(value)) {
          setCarne(carne.filter(item => item !== value));
        } else {
          setCarne([...carne, value]);
        }
      };

    return (
        <SafeAreaProvider style={S.stylesMeatScreen.container}>
            <ScrollView>

                <View>
                    <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
                </View>

                
                {/* Tipo de carne */}
                <View style={S.stylesField.container}>
                    <Text style={S.stylesField.title}>Tipo de Carne:</Text>

                    <View style={S.stylesMeats.container}>

                        {/* Bovina */}
                        <View style={S.stylesMeatOptions.container}>
                            <IconItem src={images.boi}/>       
                            {/* Checkbox carnes */}
                            <View style={S.stylesCheckbox.container}>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Picanha"
                                        status={carne.includes('Picanha') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Picanha')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Picanha</Text>
                                </View>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Contra Filé"
                                        status={carne.includes('Contra Filé') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Contra Filé')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Contra Filé</Text>
                                </View>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Coxão Mole"
                                        status={carne.includes('Coxão Mole') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Coxão Mole')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Coxão Mole</Text>
                                </View>
                            </View>
                        </View>

                        {/* Frango */}
                        <View style={S.stylesMeatOptions.container}>
                            <IconItem src={images.frango}/>
                            {/* Checkbox carnes */}
                            <View style={S.stylesCheckbox.container}>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Asa"
                                        status={carne.includes('Asa') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Asa')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Asa</Text>
                                </View>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Coxa"
                                        status={carne.includes('Coxa') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Coxa')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Coxa</Text>
                                </View>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Coração"
                                        status={carne.includes('Coração') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Coração')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Coração</Text>
                                </View>
                            </View>
                        </View>

                        {/* Suína */}
                        <View style={S.stylesMeatOptions.container}>
                            <IconItem src={images.porco}/>
                            {/* Checkbox carnes */}
                            <View style={S.stylesCheckbox.container}>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Linguiça"
                                        status={carne.includes('Linguiça') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Linguiça')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Linguiça</Text>
                                </View>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Bisteca"
                                        status={carne.includes('Bisteca') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Bisteca')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Bisteca</Text>
                                </View>
                                <View style={S.stylesCheckItem.container}>
                                    <Checkbox.Item
                                        // label="Costela"
                                        status={carne.includes('Costela') ? 'checked' : 'unchecked'}
                                        onPress={() => handleCheckboxPress('Costela')}
                                        color={theme.colors.marquis_orange}
                                    />
                                    <Text style={S.stylesCheckItem.text}>Costela</Text>
                                </View>
                            </View>
                        </View>


                        {/* <Text>Selecionados: {carne.join(', ')}</Text> */}

                    </View>
                </View>

            </ScrollView>

            <View style={S.stylesViewNext.container}>
                <Pressable style={S.stylesPressableNext.container}onPress={() => navigation.navigate('Bebidas')}>
                    <Text style={S.stylesPressableNext.text}>
                        <ChevronRight color="#fff" size={40} strokeWidth={2.0}/>
                    </Text>
                </Pressable>
            </View>

        </SafeAreaProvider>
    )
    
}

export default MeatScreen