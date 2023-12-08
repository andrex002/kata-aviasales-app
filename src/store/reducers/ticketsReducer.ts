import { LoadTicketsAction } from '../../types/actions';
import { ticketsState } from '../../types/state';

const initialState = {
  tickets: [],
  loading: true,
  error: 0,
  toShow: 5,
};

export const ticketsReducer = (state: ticketsState = initialState, action: LoadTicketsAction) => {
  const payload = action.payload;

  switch (action.type) {
    case 'LOAD_TICKETS':
      if (!payload) return;
      return {
        ...state,
        tickets: [...state.tickets, ...payload.tickets],
        loading: payload.downloadStatus,
        error: payload.errorStatus ? state.error + 1 : state.error,
      };
    case 'SHOW_MORE_TICKETS':
      return { ...state, toShow: state.toShow + 5 };
    default:
      return state;
  }
};
