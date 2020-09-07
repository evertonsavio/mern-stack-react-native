import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const jwtDecode = require('jwt-decode');

const HomeScreen = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const loadProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      props.navigation.navigate('Login');
    }
    const decoded = jwtDecode(token);
    setFullName(decoded.fullName);
    setEmail(decoded.email);

    console.log(decoded);
  };

  const logout = (props) => {
    AsyncStorage.removeItem('token')
      .then(props.navigation.replace('Login'))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadProfile();
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Bem vindo {fullName ? fullName : ''}</Text>
      </View>
      <View>
        <Text style={styles.text}>Email: {email ? email : ''}</Text>
      </View>
      <Button title="Logout" onPress={() => logout(props)} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 22,
  },
});
