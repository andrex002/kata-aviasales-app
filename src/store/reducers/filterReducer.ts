import { LoadTicketsAction } from '../../types/actions';

const initialState = {
  filters: ['all', 'noTransfers', 'oneTransfers', 'twoTransfers', 'threeTransfers'],
};

export const filterReducer = (state: any = initialState, action: LoadTicketsAction) => {
  console.log(state, action);
  switch (action.type) {
    case 'FILTERING':
      return { filters: action.payload };
    default:
      return state;
  }
};
