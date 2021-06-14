import withBaseNavigator from './base-navigator';
import PAGES from './route-names';
import ArtistPage from '../pages/artist';

export default () =>
  withBaseNavigator(PAGES.ARTIST_PAGE, [
    {
      name: PAGES.ARTIST_PAGE,
      component: ArtistPage,
    },
  ]);
