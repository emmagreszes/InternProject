import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import RegisterForm from './src/components/RegisterForm';
import SecondScreen from './src/components/SecondScreen';
import SummaryScreen from './src/components/SummaryScreen';

const Stack = createStackNavigator();

export default function App() {

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' || Platform.OS === 'android'}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={RegisterForm} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} />
            <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B37F7F',
  },
});
