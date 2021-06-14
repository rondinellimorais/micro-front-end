import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import StarContext from '../../store/star-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#000',
  },
  item: {
    padding: 16,
    fontSize: 18,
    height: 44,
    color: '#fff',
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  count: {
    borderColor: '#28FE14',
    borderWidth: 1,
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 16,
  },
});

const Item = ({item, onPress}) => (
  <TouchableOpacity style={styles.containerItem} onPress={() => onPress(item)}>
    <Text style={styles.item}>{item.name}</Text>
    <Text style={styles.count}>{item.count}</Text>
  </TouchableOpacity>
);

const FlatListBasics = () => {
  const {state, incrementValue} = useContext(StarContext); // lendo os valures da minha store

  const onPress = (item) => {
    incrementValue(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={state.names}
        renderItem={({item}) => <Item onPress={onPress} item={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default FlatListBasics;
