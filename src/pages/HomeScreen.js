import React from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import useMoedasData from '../components/apimoedas';

function HomeScreen() {
  const { loading, moedas } = useMoedasData();
  const navigation = useNavigation();

  const handleItemPress = (item) => {
    navigation.navigate('About', { item });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        {loading && (
          <>
            <ActivityIndicator style={styles.loadingIndicator} />
            <Text style={styles.loadingText}>Carregando</Text>
          </>
        )}
        {!loading && (
          <>
            <FlatList
              style={styles.lista}
              data={moedas}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.moedaCard} onPress={() => handleItemPress(item)}>
                  <Image source={{ uri: item.icon }} style={styles.tamanhoImagem} />
                  <Text style={styles.moedaTxt}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
