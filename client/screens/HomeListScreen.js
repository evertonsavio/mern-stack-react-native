import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Card from '../components/Card';
import {useDispatch, useSelector} from 'react-redux';

import * as houseAction from '../redux/actions/houseAction';

const HomeListScreen = props => {
  //console.log (props.navigation);

  const [isLoading, setIsloading] = useState (false);
  const {imoveis} = useSelector (state => state.imoveis); // imoveis.imoveis'

  const dispatch = useDispatch ();

  useEffect (
    () => {
      setIsloading (true);
      dispatch (houseAction.fetchHouses ())
        .then (() => setIsloading (false))
        .catch (() => setIsloading (false));
    },
    [dispatch]
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (imoveis.length === 0 && !isLoading) {
    return (
      <View style={styles.centered}>
        <Text>Nao ha imoveis, voce pode add um!</Text>
      </View>
    );
  }

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
            id={item._id}
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

const styles = StyleSheet.create ({
  container: {flex: 1},
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
//FloatingAction so vai aparecer se o flex for 1, ocupando todo o espaco vertical

/* 
      <TouchableOpacity
        onPress={() => props.navigation.navigate ('HomeDetails')}
      >
        <Card navigation={props.navigation} />
      </TouchableOpacity>
*/
