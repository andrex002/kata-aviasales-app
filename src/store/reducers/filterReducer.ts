import { filterState } from '../../types/state';
import { LoadTicketsAction } from '../../types/actions';

const initialState = {
  filters: ['all', 'noTransfers', 'oneTransfers', 'twoTransfers', 'threeTransfers'],
};

export const filterReducer = (state: filterState = initialState, action: LoadTicketsAction) => {
  switch (action.type) {
    case 'FILTERING':
      return { filters: action.payload };
    default:
      return state;
  }
};
