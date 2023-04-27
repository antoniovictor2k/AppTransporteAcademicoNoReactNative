import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaDeLogin from './TelaDeLogin';
import TelaDeCadastro from './TelaDeCadastro';

const Stack = createNativeStackNavigator();

function NavegacaoTelas() {
  return (

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaDeLogin} />
        <Stack.Screen name="Cadastro" component={TelaDeCadastro} />
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
