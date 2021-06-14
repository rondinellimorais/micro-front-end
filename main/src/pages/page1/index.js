import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import PAGES from '../../router/route-names';

const Page1 = ({navigation}) => {
  const navigate2Page2 = () => {
    navigation.navigate(PAGES.PAGE_2);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Você está na página 1</Text>
        <TouchableOpacity style={styles.button} onPress={navigate2Page2}>
          <Text style={styles.text}>Page 2</Text>
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

export default Page1;
