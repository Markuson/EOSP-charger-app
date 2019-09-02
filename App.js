import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import styles from './styles';
import Home from  './src/components/Home';
import QRScanner from './src/components/QRScanner';

export default function App() {
  const { container } = styles

  const [buttonState, setButtonState] = useState(null)
  const [cameraPermission, setCameraPermision] = useState(null)
  const [CsPath, setCsPath] = useState(null)
  const [chargePoint, setChargePoint] = useState(null)
  const [error, setError] = useState(null)
  const [scanner, setScanner] = useState(null)
  const [scanOK, setScanOK] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const cameraPermisions = await Permissions.askAsync(Permissions.CAMERA);
        if (cameraPermisions.status === 'granted') {
          setCameraPermision(true)
        }
      } catch (error) {
        setError(error.message)
      }
    })();
  }, [])

  useEffect(() => {
    if (chargePoint) {
      (async () => {
        let http = 'http://'
        let query = '/test?CP='
        let path = http.concat(CsPath, '/test?cp=', chargePoint, '&id=30')
        setChargePoint(null)
        setCsPath(null)
        try {
          const response = await fetch(path)
          const responseJson = await response.json()
        } catch (error) {
          setError(error.message)
        }
      })()
    }
  }, [chargePoint])

  const handleScannerOn = () => {
    setScanner(true)
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanner(false)
    let dataReaded = data.split(';')
    setCsPath(dataReaded[0])
    setChargePoint(dataReaded[1])
    alert(`ya puedes conectarte al cargador elegido`)
  }

  return (
    <View style={container}>
      {!scanner &&
        <Home
          buttonState={buttonState}
          error={error}
          onScanner={handleScannerOn}
        />
      }
      {scanner &&
        <QRScanner
          cameraPermission={cameraPermission}
          scanner={scanner}
          onScanned={handleBarCodeScanned}
        />
      }
    </View>
  )
}