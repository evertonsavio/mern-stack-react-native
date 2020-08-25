import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';

const HomeDetailsScreen = props => {
  const {houseId} = props.route.params;
  const imovel = useSelector (state =>
    state.imoveis.imoveis.find (house => house._id == houseId)
  );
  console.log (imovel);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{imovel.title}</Text>
        </View>
        <View>
          <Image source={{uri: imovel.image}} style={styles.image} />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Tipo da casa: </Text>
          <Text style={styles.value}>{imovel.homeType}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Preco: </Text>
          <Text style={styles.value}>{imovel.price}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Ano da construcao: </Text>
          <Text style={styles.value}>{imovel.yearBuild}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Endereco: </Text>
          <Text style={styles.value}>{imovel.address}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Descricao: </Text>
          <Text style={styles.value}>{imovel.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200,
  },
  group: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
  },
});

export default HomeDetailsScreen;
