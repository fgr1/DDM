import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, Image, ScrollView } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const [loading, setLoading] = useState(false);
    const [moedas, setMoedas] = useState([]);

    useEffect(() => {
        const requestMoedas = async () => {
            setLoading(true);
            const req = await fetch("https://api.coinstats.app/public/v1/coins?skip=0");
            const json = await req.json();

            if (json) {
                setMoedas(json);
            }
            setLoading(false);
        }
        requestMoedas();
    }, []);

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                {loading &&
                    <>
                        <ActivityIndicator style={styles.loadingIndicator} />
                        <Text style={styles.loadingText}>Carregando</Text>
                    </>
                }
                {!loading &&
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
                            keyExtractor={item => item.id}
                        />
                    </>
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;
