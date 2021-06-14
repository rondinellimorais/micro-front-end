import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { RouteNames, ScreenProps } from '../../@types';
import UserContext from '../../store/user-context';

const LoginPage: React.FC<ScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { saveLoggedUser, onSuccess } = useContext(UserContext);

  return (
    <View testID="loginScreen" style={styles.container}>
      <Text style={styles.text}>Faça seu login!</Text>
      <View>
        <TextInput
          testID="loginInput"
          placeholder="login"
          style={styles.inputText}
          keyboardType="email-address"
          value={username}
          onChangeText={(text) => setUsername(text.toLowerCase())}
          clearTextOnFocus
        />
        <TextInput
          testID="passwordInput"
          placeholder="senha"
          style={styles.inputText}
          secureTextEntry
          keyboardType="numeric"
          value={password}
          onChangeText={(text) => setPassword(text.toLowerCase())}
        />
        <TouchableOpacity
          testID="loginButton"
          style={styles.button}
          onPress={() => {
            saveLoggedUser(username);
            onSuccess({ navigation });
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25
  },
  text: {
    fontSize: 32,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#0000ff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000'
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginTop: 16
  }
});

export default LoginPage;
