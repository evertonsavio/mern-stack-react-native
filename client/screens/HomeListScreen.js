import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Card from '../components/Card';

const HomeListScreen = () => {
  return (
    <View style={styles.container}>
      <Card></Card>
      <FloatingAction
        position="right"
        onPressItem={() => console.log('Ola')}
        animated={false}
        showBackground={false}
      ></FloatingAction>
    </View>
  );
};

export default HomeListScreen;

const styles = StyleSheet.create({container: {flex: 1}});
//FloatingAction so vai aparecer se o flex for 1, ocupando todo o espaco vertical
