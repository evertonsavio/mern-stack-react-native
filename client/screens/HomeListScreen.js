import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Card from '../components/Card';

const HomeListScreen = (props) => {
  console.log(props.navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('HomeDetails')}
      >
        <Card navigation={props.navigation} />
      </TouchableOpacity>
      <FloatingAction
        position="right"
        onPressMain={() => props.navigation.navigate('AddHome')}
        animated={false}
        showBackground={false}
      ></FloatingAction>
    </View>
  );
};

export default HomeListScreen;

const styles = StyleSheet.create({container: {flex: 1}});
//FloatingAction so vai aparecer se o flex for 1, ocupando todo o espaco vertical
