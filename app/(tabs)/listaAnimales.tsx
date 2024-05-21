import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ScaledSheet} from 'react-native-size-matters';

const AnimalListScreen = () => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch('https://api.thedogapi.com/v1/breeds');
      const data = await response.json();
      return data;
    };

    const fetchCats = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/breeds');
      const data = await response.json();
      return data;
    };

    const fetchData = async () => {
      try {
        const dogData = await fetchDogs();
        const catData = await fetchCats();
        setDogs(dogData);
        setCats(catData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const animals = [...dogs, ...cats];

  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.breed_group || item.origin}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '20@s',
    backgroundColor: '#f0f4f7',
  },
  item: {
    padding: '15@ms',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    color: '#333',
  },
  type: {
    fontSize: '16@ms',
    color: '#666',
  },
});

export default AnimalListScreen;
