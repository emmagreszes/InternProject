import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Picker } from 'react-native';
import FormField from './FormField';
import { formData } from '../formData';
import SecondScreen from './SecondScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ModalDropdown from 'react-native-modal-dropdown';

const RegisterForm = ({navigation}, props) => {
  const [formValues, handleFormValueChange, setFormValues] = formData({
    name: '',
    month: '',
    food: ''
  })

  return (
    <View >

      <FormField
  //name
        label='Name'
        formKey='name'
        placeholder='Your name'
        handleFormValueChange={handleFormValueChange}
      />

      <Text style = {styles.header}> What month were your born?</Text>
      <ModalDropdown
  //month
        options={['January','February','March','April','May','June','July',
                  'August','September','October','November','December']}
        dropdownTextStyle={styles.formText}
        style={styles.modal}
        textStyle={styles.modalFont}
        dropdownStyle={{width: '60%'}}
      />

      <Text style = {styles.header}> What is your birth date?</Text>
      <ModalDropdown
  //date
        options={['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17',
                  '18','19','20','21','22','23','24','25','26','27','28','29','30','31']}
        dropdownTextStyle={styles.formText}
        style={styles.modal}
        textStyle={styles.modalFont}
        dropdownStyle={{width: '60%'}}
      />

      <FormField
  //food
        label='What is your favorite food?'
        formKey='food'
        placeholder='Your favorite food'
        handleFormValueChange={handleFormValueChange}
      />

      <Text style={styles.header}>Summary: </Text>
      <View>
        <Text style={styles.formText}>Name : {formValues.name}</Text>
        <Text style={styles.formText}>Month: {formValues.month}</Text>

      </View>

      <Button
        title="Next"
        onPress={() => navigation.navigate('SecondScreen')}
        color = '#5F9961'
      />
    </View>
  )
}

const styles = StyleSheet.create({

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
    marginLeft: 20,
    width: '60%',
    backgroundColor:'#5F9961',
    borderRadius: 30
  },
  modalFont: {
    fontSize: 20,
    margin: 10
  }
})

export default RegisterForm;
