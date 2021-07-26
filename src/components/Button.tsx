import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

const Button = ({action, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{action}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Button;
