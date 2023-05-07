import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../styles';

function AboutScreen() {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text>About Screen</Text>
            </View>
        </ScrollView>
    );
}

export default AboutScreen;