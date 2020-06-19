import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FormField from './FormField';
import { formData } from '../formData';
import SummaryScreen from './SummaryScreen'
import ModalDropdown from 'react-native-modal-dropdown';

const SecondScreen = ({navigation}, props) => {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    color: '',
    meal: '',
    year: '',

  })
  return (
    <View style={styles.container}>

      <Text style = {styles.header}> What is your favorite color?</Text>
      <ModalDropdown
  //color
        options={['Red','Orange','Yellow','Green','Blue','Purple']}
        dropdownTextStyle={styles.formText}
        style={styles.modal}
        textStyle={styles.modalFont}
        dropdownStyle={{width: '60%'}}
      />

      <Text style = {styles.header}> What is your favorite meal of the day?</Text>
      <ModalDropdown
  //meal
        options={['Breakfast','Brunch','Lunch','Dinner','Late Night']}
        dropdownTextStyle={styles.formText}
        style={styles.modal}
        textStyle={styles.modalFont}
        dropdownStyle={{width: '60%'}}
      />

      <Text style = {styles.header}> What year are you in college?</Text>
      <ModalDropdown
  //year
        options={['Freshman','Sophomore','Junior','Senior']}
        dropdownTextStyle={styles.formText}
        style={styles.modal}
        textStyle={styles.modalFont}
        dropdownStyle={{width: '60%'}}
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
        color = '#CC2980'
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
  },
  modal: {
    marginLeft: 140,
    width: '60%',
    backgroundColor:'#CC2980',
    borderRadius: 30
  },
  modalFont: {
    fontSize: 20,
    margin: 10
  }
})

export default SecondScreen;
