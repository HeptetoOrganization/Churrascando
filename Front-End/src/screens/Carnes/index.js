import { useState } from "react";

import {
  Text,
  View,
  Pressable, // Botão Personalizado
  ScrollView,
  Alert,
} from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
// inserção de área segura do dispositivo para Android e iOS.

// Icon
import { ChevronRight } from "lucide-react-native";

import * as S from "./style.js";
import { theme } from "../../theme/index.js";
import IconItem from "../../components/IconItem/index.js";
import { Checkbox } from "react-native-paper";

const MeatScreen = () => {
  // const navigation = useNavigation();
  const [carne, setCarne] = useState([]);

  const handleNextPress = () => {
    navigation.navigate("Drinks", {
      carnesSelecionadas: carne,
    });
  };

  // Função para manipular a seleção de carne
  const handleCheckboxPress = (value) => {
    if (carne.includes(value)) {
      setCarne(carne.filter((item) => item !== value));
    } else {
      setCarne([...carne, value]);
    }
  };

  // Componente para representar as opções de carne
  const MeatOption = ({ src, label }) => (
    <View style={S.stylesMeatOptions.container}>
      <IconItem src={src} />
      {/* Checkbox carnes */}
      <View style={S.stylesCheckbox.container}>
        <Checkbox.Item
          status={carne.includes(label) ? "checked" : "unchecked"}
          onPress={() => handleCheckboxPress(label)}
          color={theme.colors.marquis_orange}
        />
        <Text style={S.stylesCheckItem.text}>{label}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider style={S.stylesMeatScreen.container}>
      <ScrollView>
        <View>
          <Text style={S.stylesMainTitle.text}>Escolha as Carnes</Text>
        </View>

        {/* Tipo de carne */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Tipo de Carne:</Text>
          <View style={S.stylesMeats.container}>
            <MeatOption src={image.boi} label="Picanha" />
            <MeatOption src={images.boi} label="Contra Filé" />
            <MeatOption src={images.boi} label="Coxão Mole" />
            {/* Adicione mais opções conforme necessário */}
          </View>
        </View>
      </ScrollView>

      {/* Botão Próximo */}
      <Pressable style={S.stylesButton.container} onPress={handleNextPress}>
        <Text style={S.stylesButton.text}>Próximo</Text>
        <ChevronRight size={18} />
      </Pressable>
    </SafeAreaProvider>
  );
};

export default MeatScreen;
