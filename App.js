import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaDeLogin from './src/TelaDeLogin';
import TelaDeCadastro from './src/TelaDeCadastro';
// import TelaPrincipal from './src/TelaPrincipal';
import TelaPrincipalComMenu from './src/TelaPrincipalComMenu';
import TelaRecuperarSenha from './src/TelaRecuperarSenha';

const Stack = createNativeStackNavigator();

function NavegacaoTelas() {
  return (

    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" options={{ headerShown: false }} component={TelaDeLogin} />
      <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={TelaDeCadastro} />
      <Stack.Screen name="TelaPrincipalComMenu" options={{ headerShown: false }} component={TelaPrincipalComMenu} />
      <Stack.Screen name="RecuperarSenha" options={{ headerShown: false }} component={TelaRecuperarSenha} />
      {/* <Stack.Screen name="Principal" options={{headerShown:false}} component={TelaPrincipal} /> */}
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
