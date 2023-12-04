import { combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { tabsReducer } from './tabsReducer';

export default combineReducers({
  filterReducer,
  tabsReducer,
});
