import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();

    const handleSobreClick = () => {
        navigation.navigate('About');
    }
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <TouchableOpacity title="Sobre" style={styles.primaryButton} onPress={handleSobreClick}>
                    <text style={styles.primaryBtnText}>Sobre</text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;