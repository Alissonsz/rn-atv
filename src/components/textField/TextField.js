import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const TextField = ({ placeholder, setter, isSecured = false } = props) => {
  return (
    <TextInput style={styles.textInput} placeholder={placeholder} onChangeText={setter} secureTextEntry={isSecured} />
  )
}

export default TextField;
