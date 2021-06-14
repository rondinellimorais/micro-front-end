import React, { useContext } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import type { ScreenProps } from '../../@types';
import UserContext from '../../store/user-context';

const Home: React.FC<ScreenProps> = ({ navigation: { pop } }) => {
  const { loggedUser } = useContext(UserContext);

  return (
    <View testID="homeScreen" style={styles.container}>
      <Text style={styles.text}>Área logada!!!!!!</Text>
      <Text style={styles.username}>{loggedUser}</Text>
      <TouchableOpacity testID="logoffButton" style={styles.button} onPress={() => pop()}>
        <Text style={styles.buttonTitle}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  text: {
    fontSize: 32
  },
  username: {
    fontSize: 32,
    color: '#ff00ff'
  },
  button: {
    width: width - 50,
    borderWidth: 2,
    marginTop: 20,
    borderColor: 'red',
    borderRadius: 10,
    padding: 16
  },
  buttonTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red'
  }
});

export default Home;
