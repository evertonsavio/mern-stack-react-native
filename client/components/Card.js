import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Card = props => {
  console.log (props);
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {props.title.lendth > 30
              ? props.title.slice (0.30) + '...'
              : props.title}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground source={{uri: props.image}} style={styles.image}>
            <Text style={styles.price}>{props.price}R$</Text>
            <View style={styles.year}>
              <Text style={styles.yearText}>{props.yearBuild}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {props.description.length > 100
              ? props.description.slice (0.30)
              : props.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 5,
    height: 300,
    margin: 10,
  },
  titleContainer: {
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  imageContainer: {
    width: '100%',
    height: '65%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 30,
    color: '#fff',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
  },
  year: {
    margin: 10,
    position: 'absolute',
    backgroundColor: '#2652B0',
    height: 25,
    width: 80,
    borderRadius: 5,
    right: 1,
    bottom: 15,
  },
  yearText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    margin: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Card;
