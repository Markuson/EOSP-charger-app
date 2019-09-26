import React from 'react';
import { Text, View } from 'react-native';
import styles from './Indicator.styles'

function Indicator({
    status
}) {
    const { text, indicator, indicatorGray, indicatorGreen } = styles

    return (
        <>
            {!status &&
                <View style={[indicator, indicatorGray]} >
                    <Text style={text}>not connected</Text>
                </View>
            }
            {status &&
                < View style={[indicator, indicatorGreen]} >
                    <Text style={text}>{status}</Text>
                </View>
            }
        </>
    );
}

export default Indicator