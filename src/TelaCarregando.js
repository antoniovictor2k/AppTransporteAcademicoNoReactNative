import React from 'react'
import { ActivityIndicator, Text } from 'react-native-paper';
import styles from '../Styles/StyleTelaCarregando';
import { View } from 'react-native';

function TelaCarregando() {
    return (
        <View style={styles.container}>

            <ActivityIndicator
                animating={true}
                color={'#fff'}
                size={'large'}
            />
            <Text style={styles.texto}>Por favor aguarde...</Text>
        </View>
    )
}

export default TelaCarregando