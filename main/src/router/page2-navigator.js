import withBaseNavigator from './base-navigator';
import PAGES from './route-names';
import Page2 from '../pages/page2';

export default () =>
  withBaseNavigator(PAGES.PAGE_2, [
    {
      name: PAGES.PAGE_2,
      component: Page2,
    },
  ]);
