import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useNavigation, useNavigationParam} from 'react-navigation-hooks'
import { createStackNavigator } from 'react-navigation-stack';
import { BarCodeScanner } from 'expo-barcode-scanner'
import styles from '../../../styles/generalStyles'

import Button from '../../components/Button'


function QRScanner() {
    const { qrFooter, qrContainer } = styles
    const { navigate } = useNavigation()
    const cameraPermission = useNavigationParam('cameraPermission')

    const handleBarCodeScanned = ({ type, data }) => {
        setScanner(false)
        let dataReaded = data.split(';')
        setCsPath(dataReaded[0])
        setChargePoint(dataReaded[1])
        setGetStatus(true)
    }

    if (cameraPermission === null) {
        return <Text>Requesting for camera permission</Text>
    }
    if (cameraPermission === false) {
        return <Text>No access to camera</Text>
    }
    return (
        <View style={qrContainer}>
            <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned()}
                style={StyleSheet.absoluteFillObject}
            />
            <View style={qrFooter}>
                <Button
                    onPress={() => navigate('Home')}
                    title='CANCEL' />
            </View>
        </View>
    )
}

export default createStackNavigator(QRScanner)