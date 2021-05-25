import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const HomePage = props => {
  const { email } = props.route.params;

  return (
    <View style={styles.container}>
      <Text>
        Olá {email} bem vindo a home!
      </Text>
    </View>
  )
}

export default HomePage;