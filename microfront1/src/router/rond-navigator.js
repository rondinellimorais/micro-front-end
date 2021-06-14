import withBaseNavigator from './base-navigator';
import PAGES from './route-names';
import RondPage from '../pages/rond-page';

export default () =>
  withBaseNavigator(PAGES.ROND_PAGE, [
    {
      name: PAGES.ROND_PAGE,
      component: RondPage,
    },
  ]);
