import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const Page2 = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo à página 2</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.popToTop();
          }}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ff00ff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 20,
  },
});

export default Page2;
