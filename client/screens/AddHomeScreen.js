import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup'; // validacao

const formSchema = yup.object({
  title: yup.string().required().min(3).max(50),
  price: yup.number().required(),
  yearBuild: yup.number().required(),
  image: yup.string().required(),
  address: yup.string().required(),
  description: yup.string().required(),
  homeType: yup.string().required(),
});

const AddHomeScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={100}
      style={{flex: 1}}
    >
      <ScrollView>
        <Formik
          initialValues={{
            title: '',
            image: '',
            homeType: '',
            price: '',
            yearBuild: '',
            address: '',
            description: '',
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('title')}
                  value={props.values.title}
                  onBlur={props.handleBlur('title')}
                />
                <Text style={styles.error}>
                  {props.touched.title && props.errors.title}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('image')}
                  value={props.values.image}
                  onBlur={props.handleBlur('image')}
                />
                <Text style={styles.error}>
                  {props.touched.image && props.errors.image}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Home Type</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('homeType')}
                  value={props.values.homeType}
                  onBlur={props.handleBlur('homeType')}
                />
                <Text style={styles.error}>
                  {props.touched.homeType && props.errors.homeType}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Price</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('price')}
                  value={props.values.price}
                  keyboardType="numeric"
                  onBlur={props.handleBlur('price')}
                />
                <Text style={styles.error}>
                  {props.touched.price && props.errors.price}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Year Built</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={props.handleChange('yearBuild')}
                  value={props.values.yearBuild}
                  keyboardType="number-pad"
                  onBlur={props.handleBlur('yearBuild')}
                />
                <Text style={styles.error}>
                  {props.touched.yearBuild && props.errors.yearBuild}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  multiline
                  onChangeText={props.handleChange('address')}
                  value={props.values.address}
                  onBlur={props.handleBlur('address')}
                />
                <Text style={styles.error}>
                  {props.touched.address && props.errors.address}
                </Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.input}
                  multiline
                  onChangeText={props.handleChange('description')}
                  value={props.values.description}
                  onBlur={props.handleBlur('description')}
                />
                <Text style={styles.error}>
                  {props.touched.description && props.errors.description}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button title="Add Home" onPress={props.handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddHomeScreen;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  form: {
    margin: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
  formGroup: {
    width: '100%',
  },
  label: {
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
