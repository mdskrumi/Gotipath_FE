/**
 *
 * Asynchronously loads the component for GotiSideBar
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
