import withBaseNavigator from './base-navigator';
import PAGES from './route-names';
import Page0 from '../pages/page0';

export default () =>
  withBaseNavigator(PAGES.PAGE_0, [
    {
      name: PAGES.PAGE_0,
      component: Page0,
    },
  ]);
