import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PaperProvider } from 'react-native-paper';

// Componentes telas
import LoadingScreen from './src/screens/Loading/index.js'
import HomeScreen from './src/screens/Inicio/index.js'
import OrganizerScreen from './src/screens/Organizador/index.js'
import MeatScreen from './src/screens/Carnes/index.js'
import DrinksScreen from './src/screens/Bebidas/index.js'
import SideDishScreen from './src/screens/Acompanhamentos/index.js'
import ResultsScreen from './src/screens/Resultados/index.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <PaperProvider>
    //     <View style={styles.container}>
    //       <Text>Open up App.js to start working on your app!</Text>
    //       <StatusBar style="auto" />
    //     </View>
    //   </PaperProvider>
    // </NavigationContainer>

  <NavigationContainer>
    <Stack.Navigator initialRouteName="Início">
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Início" component={HomeScreen}/>
      <Stack.Screen name="Organizador" component={OrganizerScreen} />
      <Stack.Screen name="Carnes" component={MeatScreen} />
      <Stack.Screen name="Bebidas" component={DrinksScreen} />
      <Stack.Screen name="Acompanhamentos" component={SideDishScreen} />
      <Stack.Screen name="Resultados" component={ResultsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
