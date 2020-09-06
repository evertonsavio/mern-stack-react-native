import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RegisterScreen = (navData) => {
  return (
    <KeyboardAvoidingView behavior="height" flex={1}>
      <Formik
        initialValues={{
          firtName: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          navData.navigation.navigate('Home');
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <View style={styles.logo}>
              <Image
                source={require('../assets/images/logo.png')}
                style={styles.image}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#fff"
                onChangeText={props.handleChange('fullName')}
                value={props.values.fullName}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#fff"
                secureTextEntry={true}
                onChangeText={props.handleChange('password')}
                value={props.values.password}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>have an account?</Text>
                <TouchableOpacity
                  onPress={() => navData.navigation.navigate('Login')}
                >
                  <Text style={styles.registerButton}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    width: 300,
    backgroundColor: '#B6BFC4',
    borderRadius: 25,
    padding: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#738289',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  registerContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  registerText: {
    color: '#738289',
    fontSize: 16,
  },
  registerButton: {
    color: '#738289',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
  },
});
