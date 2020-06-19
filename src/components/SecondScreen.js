import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FormField from './FormField';
import { formData } from '../formData';
import SummaryScreen from './SummaryScreen'

const SecondScreen = ({navigation}, props) => {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    color: '',
    meal: '',
    year: '',

  })
  return (
    <View style={styles.container}>
      <FormField
        label='What is your favorite color?'
        formKey='color'
        placeholder='Your favorite color'

        handleFormValueChange={handleFormValueChange}
      />
      <FormField
        label='Which meal of the day is your favorite?'
        formKey='meal'
        placeholder='Your favorite meal'
        textInputProps={{
          autoCapitalize: "none"
        }}
        handleFormValueChange={handleFormValueChange}
      />
      <FormField
        label='Which year are you in college?'
        formKey='year'
        placeholder='Your year in college'
        textInputProps={{
          autoCapitalize: "none"
        }}
        handleFormValueChange={handleFormValueChange}
      />

      <Text style={styles.header}>Values in Hook: </Text>
      <View>
        <Text style={styles.formText}>Favorite Color : {formValues.color}</Text>
        <Text style={styles.formText}>Favorite Meal: {formValues.meal}</Text>
        <Text style={styles.formText}>Year in College: {formValues.year}</Text>

      </View>

      <Button
        title="Go to Summary Page"
        onPress={() => navigation.navigate('SummaryScreen')}
        color = '#FF00FF'
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

export default SecondScreen;
