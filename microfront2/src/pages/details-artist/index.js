import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import store from '../../store';

const DetailsArtistsPage = ({navigation}) => {
  const {artist} = store.getState().artist;
  return (
    <View testID="artistDetailsPage" style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: artist.photo,
        }}
      />
      <Text style={styles.title}>{artist.name}</Text>
      <TouchableOpacity
        testID="backButton"
        style={styles.button}
        onPress={() => navigation.pop()}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    paddingVertical: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FEF49C',
  },
  button: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    marginTop: 60,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default DetailsArtistsPage;
