import React from 'react';
import {Button, Text} from 'react-native';
import styles from '../../../styles'


function Home({
  error,
  onScanner
}) {
  const { title } = styles

  return (
    <>
      <Text style={title}>Pruebas</Text>
      <Button onPress={() => onScanner()} title='Scan the charger QR' />
      <Text>{error}</Text>
    </>
  );
}

export default Home