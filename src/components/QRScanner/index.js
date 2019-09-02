import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';



function QRScanner({
    cameraPermission,
    scanner,
    onScanned
}) {

    if (cameraPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (cameraPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <>
            <BarCodeScanner
                onBarCodeScanned={scanner ? onScanned : undefined}
                style={StyleSheet.absoluteFillObject}
            />
        </>
    );
}

export default QRScanner