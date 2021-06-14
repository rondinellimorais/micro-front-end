import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import PAGES from '../../router/route-names';

const RondPage = ({navigation}) => {
  const navigate2Names = () => {
    navigation.navigate(PAGES.PAGE_1);
  };

  const navigate2Microfront2 = () => {
    navigation.navigate(PAGES.MICROFRONT2_MAIN);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo à Rond Page</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://ca.slack-edge.com/T2YD0LD2R-UM7DTD9SM-ba51ebd67051-512',
        }}
      />
      <Text style={styles.title}>Rondinelli Morais</Text>
      <TouchableOpacity style={styles.button} onPress={navigate2Names}>
        <Text style={styles.text}>Página 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigate2Microfront2}>
        <Text style={styles.text}>Microfront 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#000',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 20,
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  button: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default RondPage;
