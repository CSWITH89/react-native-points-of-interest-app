import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Search = ({stateUpdate}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => stateUpdate(text)}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
  },
});

export default Search;
