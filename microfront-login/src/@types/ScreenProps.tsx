import type { ParamListBase, RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

interface ScreenProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}

export default ScreenProps;
