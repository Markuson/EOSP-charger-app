import React from 'react';
import { View, SafeAreaView } from 'react-native';
import AppContainer from './src/navigator/AppContainer'
import { mainContainer } from './styles/generalStyles'


export default function App() {

  return (
    <View style={mainContainer}>
      < SafeAreaView />
      < AppContainer />
    </View>
  )
}