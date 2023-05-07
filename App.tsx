import React from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;