import withBaseNavigator from './base-navigator';
import PAGES from './route-names';
import Page1 from '../pages/page1';

export default () =>
  withBaseNavigator(PAGES.PAGE_1, [
    {
      name: PAGES.PAGE_1,
      component: Page1,
    },
  ]);
