import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../../styles';

function AboutScreen({ route }) {
  const { item } = route.params;

  const handleWebsitePress = () => {
    Linking.openURL(item.websiteUrl);
  };

  const handleTwitterPress = () => {
    Linking.openURL(item.twitterUrl);
  };

  const renderExternalLinks = () => {
    if (item.exp && item.exp.length > 0) {
      return (
        <>
          <Text style={styles.aboutTitle}>External Links:</Text>
          {item.exp.map((link, index) => (
            <TouchableOpacity key={index} onPress={() => Linking.openURL(link)}>
              <Text style={styles.aboutLink}>{link}</Text>
            </TouchableOpacity>
          ))}
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={{ uri: item.icon }} style={styles.tamanhoImagem} />
        <Text style={styles.aboutTitle}>{item.name}</Text>
        <Text style={styles.aboutText}>Symbol: {item.symbol}</Text>
        <Text style={styles.aboutText}>Rank: {item.rank}</Text>
        <Text style={styles.aboutText}>Price: {item.price}</Text>
        <Text style={styles.aboutText}>Volume: {item.volume}</Text>
        <Text style={styles.aboutText}>Market Cap: {item.marketCap}</Text>
        <Text style={styles.aboutText}>Available Supply: {item.availableSupply}</Text>
        <Text style={styles.aboutText}>Total Supply: {item.totalSupply}</Text>
        <Text style={styles.aboutText}>Price Change (1h): {item.priceChange1h}</Text>
        <Text style={styles.aboutText}>Price Change (1d): {item.priceChange1d}</Text>
        <Text style={styles.aboutText}>Price Change (1w): {item.priceChange1w}</Text>
        <TouchableOpacity onPress={handleWebsitePress}>
          <Text style={styles.aboutLink}>{item.websiteUrl}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTwitterPress}>
          <Text style={styles.aboutLink}>{item.twitterUrl}</Text>
        </TouchableOpacity>
        {renderExternalLinks()}
      </View>
    </ScrollView>
  );
}

export default AboutScreen;
