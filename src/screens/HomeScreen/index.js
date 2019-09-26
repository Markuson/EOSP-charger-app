import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-navigation-hooks'
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text } from 'react-native'
import * as Permissions from 'expo-permissions'
import styles from './HomeScreen.styles'

import Button from '../../components/Button'
import Indicator from '../../components/Indicator'


function HomeScreen() {

  const { navigate } = useNavigation();

  const { body, controls, footer, header, title } = styles
  const [cameraPermission, setCameraPermision] = useState(null)
  const [CsPath, setCsPath] = useState(null)
  const [chargePoint, setChargePoint] = useState(null)
  const [error, setError] = useState(null)
  const [getStatus, setGetStatus] = useState(null)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const cameraPermisions = await Permissions.askAsync(Permissions.CAMERA)
        if (cameraPermisions.status === 'granted') {
          setCameraPermision(true)
        }
      } catch (error) {
        setError(error.message)
      }
    })();
  }, [])

  useEffect(() => {
    if (getStatus) {
      handleStatus()
    }
  }, [getStatus])

  useEffect(() => {
    if (status == 'stopped') {
      alert('Charge finished!')
      setStatus(null)
      setCsPath(null)
      setChargePoint(null)
      setError(null)
    }

    if (status && (status != 'ready')) {
      const retrieveInterval = setInterval(async () => {
        handleStatus()
      }, 1000);
      return () => clearInterval(retrieveInterval)
    }
  }, [status])

  const handleChargeStart = () => {
    (async () => {
      let http = 'http://'
      let path = http.concat(CsPath, '/chargestart?cp=', chargePoint, '&id=30')
      try {
        const response = await fetch(path)
        const responseJson = await response.json()
        setError(null)
        setStatus(responseJson.status)
      } catch (error) {
        setError(error.message)
      }
    })()
  }

  const handleChargeStop = () => {
    (async () => {
      let http = 'http://'
      let path = http.concat(CsPath, '/chargestop?cp=', chargePoint, '&id=30')
      try {
        const response = await fetch(path)
        const responseJson = await response.json()
        setError(null)
        setStatus(responseJson.status)
      } catch (error) {
        setError(error.message)
      }
    })()
  }

  const handleStatus = () => {
    (async () => {
      let http = 'http://'
      let path = http.concat(CsPath, '/status?cp=', chargePoint)
      try {
        const response = await fetch(path)
        const responseJson = await response.json()
        setError(null)
        setStatus(responseJson.status)
      } catch (error) {
        setError(error.message)
      }
    })()
  }

  return (
    <>
      <View style={header} >
        <Text style={title} >EOSP-Charger</Text>
      </View>
      <View style={body} >

        <Indicator status={status} />

        <View style={controls} >
          {(!status) &&
            <Button
              onPress={() => {
                navigate('QRScanner', {
                  cameraPermission
                })
              }}
              title='Scan QR' />
          }

          {(status == 'connected') &&
            <Button onPress={() => handleChargeStart()} title='start Charge' />
          }

          {((status != 'connected') && status) &&
            <Button onPress={() => handleChargeStop()} title='stop Charge' />
          }
        </View>
      </View>
      <View style={footer} >
        <Text>{error}</Text>
      </View>
    </>
  );
}

export default createStackNavigator(HomeScreen)
