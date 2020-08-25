import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';

import * as houseAction from '../redux/actions/houseAction';

const HomeListScreen = props => {
  //console.log (props.navigation);
  const {imoveis} = useSelector (state => state.imoveis); // imoveis.imoveis
  const dispatch = useDispatch ();

  useEffect (
    () => {
      dispatch (houseAction.fetchHouses ());
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imoveis}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <Card
            navigation={props.navigation}
            title={item.title}
            address={item.address}
            homeType={item.homeType}
            price={item.price}
            image={item.image}
            yearBuild={item.yearBuild}
            description={item.description}
          />
        )}
      />

      <FloatingAction
        position="right"
        onPressMain={() => props.navigation.navigate ('AddHome')}
        animated={false}
        showBackground={false}
      />
    </View>
  );
};

export default HomeListScreen;

const styles = StyleSheet.create ({container: {flex: 1}});
//FloatingAction so vai aparecer se o flex for 1, ocupando todo o espaco vertical

/* 
      <TouchableOpacity
        onPress={() => props.navigation.navigate ('HomeDetails')}
      >
        <Card navigation={props.navigation} />
      </TouchableOpacity>
*/
