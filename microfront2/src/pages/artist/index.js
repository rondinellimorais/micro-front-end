import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';

import PAGES from '../../router/route-names';

import {addSelectedArtist} from '../../store/actions';

const Item = ({index, item, onPress}) => (
  <TouchableOpacity
    testID={`artistItem_${index}`}
    style={styles.itemContainer}
    onPress={() => onPress(item)}>
    <Image
      style={styles.photo}
      source={{
        uri: item.photo,
      }}
    />
    <Text style={styles.item}>{item.name}</Text>
  </TouchableOpacity>
);

const Artists = ({navigation}) => {
  const dispatch = useDispatch();
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://5e16439d22b5c600140cf99a.mockapi.io/artists')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setArtists(json);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  const onPress = (item) => {
    dispatch(addSelectedArtist(item));
    navigation.navigate(PAGES.DETAILS_ARTIST_PAGE);
  };

  return (
    <View testID="artistPage" style={styles.container}>
      {!isLoading ? (
        <FlatList
          testID="artistList"
          data={artists}
          renderItem={({item, index}) => (
            <Item index={index} item={item} onPress={onPress} />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#FEF49C',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    paddingLeft: 10,
    fontSize: 18,
    color: '#000',
  },
  photo: {
    width: 50,
    height: 50,
  },
  separator: {
    height: 1,
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginVertical: 5,
  },
});

export default Artists;
