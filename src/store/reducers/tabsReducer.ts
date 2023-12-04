import { tabsState } from '../../types/state';
import { tabsAction } from '../../types/actions';

export const tabsReducer = (state: tabsState = tabsState.CHEAP, action: tabsAction) => {
  switch (action.type) {
    case 'CHEAP':
      return tabsState.CHEAP;
    case 'FAST':
      return tabsState.FAST;
    case 'OPTIMAL':
      return tabsState.OPTIMAL;
    default:
      return state;
  }
};
