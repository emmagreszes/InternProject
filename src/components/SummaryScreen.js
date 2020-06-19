import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FormField from './FormField';
import { formData } from '../formData';
import RegisterForm from './RegisterForm';

const SummaryScreen = ({navigation}, props) => {

  return (
    <View style={styles.container}>

      <Text> Summary Screen </Text>

      <Button
        title="Start Over"
        onPress={() => navigation.navigate('Home')}
        color = '#0A0AFF'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 20,
  },
  header: {
    fontSize: 20,
    paddingTop: 30
  },
  formText: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 0
  }
})

export default SummaryScreen;
