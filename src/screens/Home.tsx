import React, {FC, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {API_KEY} from '@env';
// Keys stored in RN env
import {Card, Search, Button} from '../components';
import GetLocation from 'react-native-get-location';

const Home: FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [POIData, setPOIData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const getLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      setCurrentLocation(location);
    } catch (e) {
      console.error(e);
      // Rollbar here later for errors
    }
  };

  const getPOIs = async searchStr => {
    try {
      const response = await (
        await fetch(
          searchStr
            ? `https://api.tomtom.com/search/2/poiSearch/${searchStr}.json?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&key=${API_KEY}`
            : `https://api.tomtom.com/search/2/poiSearch/poi.json?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&key=${API_KEY}`,
        )
      ).json();
      setPOIData(response);
      if (POIData) setLoading(false);
    } catch (e) {
      console.error(e);
      // Rollbar here later for errors
    }
  };

  useEffect(() => {
    if (!currentLocation) getLocation();
    if (currentLocation) getPOIs();
    if (POIData) setLoading(false);
  }, [currentLocation, POIData]);

  if (searchTerm.length > 3) {
    getPOIs(searchTerm);
  }

  return (
    <View style={styles.container}>
      {!loading ? (
        <>
          <Search stateUpdate={setSearchTerm} />

          <ScrollView showsVerticalScrollIndicator={false}>
            {POIData.results.map(POI => (
              <Card key={POI.id} name={POI.poi.name} distance={POI.dist} />
            ))}
          </ScrollView>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
      <Button
        action="Update Location"
        onPress={() => setCurrentLocation(null)}
      />
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
