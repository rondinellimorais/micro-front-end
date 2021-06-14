import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import PAGES from '../../router/route-names';

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
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 20,
  },
});

export default ({navigation}) => {
  const navigate2Page1 = () => {
    navigation.navigate(PAGES.PAGE_1);
  };

  const navigate2Microfront2 = () => {
    navigation.navigate(PAGES.MICROFRONT1_MAIN_PAGE);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Navegação para páginas internas</Text>
        <TouchableOpacity style={styles.button} onPress={navigate2Page1}>
          <Text style={styles.text}>Page 1</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Navegação para os microfronts</Text>
        <TouchableOpacity style={styles.button} onPress={navigate2Microfront2}>
          <Text style={styles.text}>Micro front 1</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
