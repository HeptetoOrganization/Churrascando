import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as S from './style'; // Corrigido o nome do arquivo de estilo
import GuestComponent from '../../components/GuestComponent/index.js';
import OrganizerComponents from '../../components/OrganizerComponents/index.js';
import { ChevronRight } from 'lucide-react-native';

const OrganizerScreen = ({ navigation }) => {
  const [organizador, setOrganizador] = useState('');
  const [numHomens, setNumHomens] = useState('');
  const [numMulheres, setNumMulheres] = useState('');
  const [numCriancas, setNumCriancas] = useState('');
  const [endereco, setEndereco] = useState({
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: '',
  });
  const [valorLocacao, setValorLocacao] = useState('');

  const handleNextPress = () => {
      navigation.navigate('Carnes', {
          organizador: organizador,
          numHomens: numHomens,
          numMulheres: numMulheres,
          numCriancas: numCriancas,
          endereco: endereco,
          valorLocacao: valorLocacao
      });
  };

  const source = {
    mulher: require('../../assets/mulher.png'),
    homem: require('../../assets/homem.png'),
    criancas: require('../../assets/criancas.png'),
  }

  return (
    <SafeAreaProvider style={S.stylesOrganizerScreen.container}>
      <ScrollView>
        <View>
          <Text style={S.stylesMainTitle.text}>Faça seu Cálculo</Text>
        </View>
        
        {/* Organizador */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>{'Organizador(a):'}</Text>
          <OrganizerComponents width={'51%'} text={'Quem irá organizar?'} value={organizador} maxLen={20} onChangeText={setOrganizador}/>
        </View>

        {/* Convidados */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Convidados:</Text>
          <GuestComponent src={source.homem} text={'Qtd. de homens'} value={numHomens} maxLen={4} inputMode={'numeric'} onChangeText={setNumHomens} />
          <GuestComponent src={source.mulher} text={'Qtd. de mulheres'} value={numMulheres} maxLen={4} inputMode={'numeric'} onChangeText={setNumMulheres} />
          <GuestComponent src={source.criancas} text={'Qtd. de crianças'} value={numCriancas} maxLen={4} inputMode={'numeric'} onChangeText={setNumCriancas} />
        </View>

        {/* Locação */}
        <View style={S.stylesField.container}>
          <Text style={S.stylesField.title}>Locação:</Text>
          <OrganizerComponents width={'75%'} text={'Endereço:'} value={endereco.logradouro} onChangeText={logradouro => setEndereco({...endereco, logradouro})} />
          <OrganizerComponents width={'50%'} text={'Número:'} value={endereco.numero} inputMode={'numeric'} onChangeText={numero => setEndereco({...endereco, numero})} />
          <OrganizerComponents width={'50%'} text={'Bairro:'} value={endereco.bairro} onChangeText={bairro => setEndereco({...endereco, bairro})} />
          <OrganizerComponents width={'50%'} text={'Cidade:'} value={endereco.cidade} onChangeText={cidade => setEndereco({...endereco, cidade})} />
          <OrganizerComponents width={'25%'} text={'UF:'} value={endereco.uf} onChangeText={uf => setEndereco({...endereco, uf})} />
          <OrganizerComponents width={'75%'} text={'Valor locação:'} value={valorLocacao} maxLen={10} inputMode={'numeric'} onChangeText={setValorLocacao} />
        </View>

        <Pressable style={S.stylesViewNext.container} onPress={handleNextPress}>
          <Text style={S.stylesViewNext.text}>Próximo</Text>
          <ChevronRight size={18} />
        </Pressable>
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default OrganizerScreen;
