import MapView from 'react-native-maps';
import {Text, TextInput, View, Image, Pressable, Linking }   from 'react-native';

import styles from '../Styles/StyleTelaLogin';


function TelaPrincipal({ navigation }) {
  return (
      <View>
        <Text style={{position:'relative', fontSize:20, color:'#fff', backgroundColor:'#000', }}>Ola antonio</Text>
<MapView style={{height:1000,}}
  initialRegion={{
      latitude: -9.511852,
      longitude:  -35.804028,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.01921,
    }}
/>

    </View>

  );
}

export default TelaPrincipal;