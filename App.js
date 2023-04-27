import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaDeLogin from './src/TelaDeLogin';
import TelaDeCadastro from './src/TelaDeCadastro';
import TelaPrincipal from './src/TelaPrincipal';

const Stack = createNativeStackNavigator();

function NavegacaoTelas() {
  return (

      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Login" component={TelaDeLogin} />
        <Stack.Screen name="Cadastro" component={TelaDeCadastro} />
        <Stack.Screen name="Principal" component={TelaPrincipal} />
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
