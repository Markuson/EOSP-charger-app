import React from 'react';
import {Button, Text} from 'react-native';
import styles from '../../../styles'


function Main({
  error,
  onScanner
}) {
  const { header, body, footer, title } = styles

  return (
    <>
      <View style={header}>
        <Text style={title}>Pruebas</Text>
      </View>
      <View style={body}>
        <Button onPress={() => onScanner()} title='Scan the charger QR' />
      </View>
      <View style={footer}>
        <Text>{error}</Text>
      </View>
    </>
  );
}

export default Main