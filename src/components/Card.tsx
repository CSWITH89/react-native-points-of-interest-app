import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface CardProps {
  name: string;
  distance: number;
}

const Card = ({name, distance}: CardProps) => {
  const images: string[] = [
    'https://images.unsplash.com/photo-1523849161192-3a6e717932c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1037&q=80',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  ];

  return (
    <View style={styles.card}>
      <View style={styles.information}>
        <Text style={styles.nameText}>{name}</Text>
        <Text>{`${Math.round(distance)}m`}</Text>
      </View>
      <View style={styles.image}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={{uri: images[Math.floor(Math.random() * 3)]}}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  information: {flex: 2, justifyContent: 'space-between', padding: 2},
  image: {flex: 1, maxHeight: 60},
  nameText: {
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Card;
