import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles'

function PrimaryControl({
    onPress,
    title
}) {
  const { text, button, primaryButton } = styles

  return (
    <TouchableOpacity onPress={onPress} style={[button , primaryButton]}>
            <Text style={text}>{title}</Text>
        </TouchableOpacity>
  );
}

export default PrimaryControl