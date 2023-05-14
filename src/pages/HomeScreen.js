import React from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, Image, ScrollView } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import useMoedasData from '../components/apimoedas';

function HomeScreen() {
  const { loading, moedas } = useMoedasData();
  const navigation = useNavigation();

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
                <View style={styles.moedaCard}>
                  <Image source={{ uri: item.icon }} style={styles.tamanhoImagem} />
                  <Text style={styles.moedaTxt}>{item.name}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()} // Convert id to string for keyExtractor
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

