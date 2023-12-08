import { combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { tabsReducer } from './tabsReducer';
import { ticketsReducer } from './ticketsReducer';

export default combineReducers({
  ticketsReducer,
  filterReducer,
  tabsReducer,
});
