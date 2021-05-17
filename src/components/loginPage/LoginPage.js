import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Image, Alert } from 'react-native';
import styles from './styles';

import Pikachu from '../../../assets/pikachu.png';
import TextField from '../textField/TextField';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    Alert.alert(`email: ${email} \npassword: ${password}`);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Pikachu}/>
      <TextField placeholder='Email' setter={setEmail} />
      <TextField placeholder='Password' setter={setPassword} isSecured={true} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginPage;
