import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {API_KEY} from '@env';
// Keys stored in RN env
import {} from '../components';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [POIData, setPOIData] = useState(null);

  useEffect(() => {
    const queryPOIs = async () => {
      try {
        const response = await (
          await fetch(
            `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
          )
        ).json();
        setPOIData(response);
      } catch (e) {
        console.error(e);
        // Rollbar here later for errors
      }
    };

    queryPOIs();
  }, []);

  useEffect(() => {
    if (POIData) setLoading(false);
  }, [POIData]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!loading ? <>{/* POIs */}</> : <Text>Loading...</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Home;
