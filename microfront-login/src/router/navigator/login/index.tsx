import type React from 'react';
import withBaseNavigator from '../helper/base-navigator';
import LoginPage from '../../../pages/login';
import { RouteNames } from '../../../@types';

const Navigator: React.FC = () => {
  return withBaseNavigator(RouteNames.LOGIN_PAGE, [
    {
      name: RouteNames.LOGIN_PAGE,
      component: LoginPage
    }
  ]);
};

export default Navigator;
