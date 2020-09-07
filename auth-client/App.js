import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import AppNavigator from './navigation/AppNavigator';
import Provider from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator></AppNavigator>
    </Provider>
  );
}

const styles = StyleSheet.create({});
