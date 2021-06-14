import withBaseNavigator from './base-navigator';
import PAGES from './route-names';
import DetailsArtistPage from '../pages/details-artist';

export default () =>
  withBaseNavigator(PAGES.DETAILS_ARTIST_PAGE, [
    {
      name: PAGES.DETAILS_ARTIST_PAGE,
      component: DetailsArtistPage,
    },
  ]);
