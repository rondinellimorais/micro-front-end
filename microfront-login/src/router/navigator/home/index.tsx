import withBaseNavigator from '../helper/base-navigator';
import HomePage from '../../../pages/home';
import { RouteNames } from '../../../@types';

export default () =>
  withBaseNavigator(RouteNames.HOME_PAGE, [
    {
      name: RouteNames.HOME_PAGE,
      component: HomePage
    }
  ]);
