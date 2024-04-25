import React, { useState, useEffect } from "react";

import { Loading } from "../../components/Loading";

import {
  Text,
  View,
  ActivityIndicator, // spinner
  TextInput,
  Pressable, // Botão Personalizado
  Image,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";

import axios from "axios";

import {
  stylesButtonDelete,
  stylesButtonImage,
  stylesButtonNew,
  stylesHomeScreen,
  stylesTasks,
  stylesTopHome,
  stylesViewHome,
  stylesViewTasks,
} from "./styles";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Calculadora from "../../Calculo/Calculadora";
// inserção de área segura do dispositivo para Android e iOS.

// , valorTotal, valorAdulto, valorTotalA, valorTotalB, valorTotalC, valorTotalL, valorTotalO
const ResultadoScreen = ({ navigation }) => {


  return (
    <SafeAreaProvider style={stylesHomeScreen.container}>
      <View>
        {/* se as tarefas não foram carregadas */}
        {!tasks ? (
          <Loading />
        ) : (
          // se foi carregado
          <>
            <FlatList
            keyExtractor={(item) => String(item)}
            data={Calculadora}
            renderItem={ ({item}) => <ListItem Calculadora={item}/>               
            }
            />
          </>
        )}
      </View>

      <Pressable
        style={[stylesButtonNew.button, stylesButtonNew.shadowProp]}
        onPress={() => navigation.navigate("Nova")}
      >
        <Text style={stylesButtonNew.text}>Nova Tarefa</Text>
        <Image
          source={require("../../assets/plus.png")}
          style={stylesButtonNew.image}
        />
      </Pressable>
    </SafeAreaProvider>
  );
};

export default ResultadoScreen;
