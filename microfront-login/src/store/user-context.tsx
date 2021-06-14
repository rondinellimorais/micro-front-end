import React from 'react';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { ParamListBase } from '@react-navigation/native';

interface UserContextProp {
  loggedUser: string | undefined;
  saveLoggedUser: (loggedUser: string | undefined) => void;

  /**
   * Função que será chamada quando o login ocorrer com sucesso
   */
  onSuccess: (props: { navigation: StackNavigationProp<ParamListBase> }) => void;
}

const UserContext = React.createContext<UserContextProp>({
  loggedUser: '',
  saveLoggedUser: () => {},
  onSuccess: () => {}
});

export default UserContext;
