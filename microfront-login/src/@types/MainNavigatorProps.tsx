import type { ParamListBase } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { NativeStackNavigationOptions } from 'react-native-screens/native-stack';

type StackHeaderMode = 'float' | 'screen' | 'none';

interface MainNavigatorProps {
  /**
   * Default options for all screens under this navigator.
   */
  screenOptions?: NativeStackNavigationOptions;

  /**
   * Specifies how the header should be rendered:
   *
   * - `float` Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.
   * - `screen` Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.
   * - `none` No header will be shown. It's recommended to use headerShown option instead for more granularity.
   */
  headerMode?: StackHeaderMode;

  /**
   * Name of the route to focus by on initial render.
   * If not specified, usually the first route is used.
   *
   * Use `RouteNames` enum to specified a route name.
   */
  initialRouteName?: string;

  /**
   * Called when authentication ends successfully
   */
  onSuccess?: (props: { navigation: StackNavigationProp<ParamListBase> }) => void;
}

export default MainNavigatorProps;
