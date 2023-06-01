import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper';


import TelaDeLogin from './src/TelaDeLogin';
import TelaDeCadastro from './src/TelaDeCadastro';
import TelaPrincipalComMenu from './src/TelaPrincipalComMenu';
import TelaRecuperarSenha from './src/TelaRecuperarSenha';
import TelaTermosDeUso from './src/TelaTermosDeUso';
import TelaTermosDePrivacidade from './src/TelaTermosDePrivacidade';
import TelaCarregando from './src/TelaCarregando';

const Stack = createNativeStackNavigator();

function NavegacaoTelas() {
  return (

    <Stack.Navigator initialRouteName="TelaPrincipalComMenu">
      <Stack.Screen name="Login" options={{ headerShown: false }} component={TelaDeLogin} />
      <Stack.Screen name="Carregando" options={{ headerShown: false }} component={TelaCarregando} />
      <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={TelaDeCadastro} />
      <Stack.Screen name="TelaPrincipalComMenu" options={{ headerShown: false }} component={TelaPrincipalComMenu} />
      <Stack.Screen name="RecuperarSenha" options={{ headerShown: false }} component={TelaRecuperarSenha} />
      <Stack.Screen name="TermosDeUso" options={{headerShown:false}} component={TelaTermosDeUso} />
      <Stack.Screen name="TermosDePrivacidade" options={{headerShown:false}} component={TelaTermosDePrivacidade} />
    </Stack.Navigator>


  );
}


function App() {
  return (
    <NavigationContainer>
      <NavegacaoTelas />
    </NavigationContainer>
  );
}

export default App;
