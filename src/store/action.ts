import { Dispatch } from 'redux';

import { getTickets } from '../services/aviasalesServises';
import { ticketsData } from '../types/state';

export const setAllTransfers = () => {
  return {
    type: 'ALL',
  };
};

export const setNoTransfers = () => {
  return {
    type: 'NO_TRANSFERS',
  };
};

export const setOneTransfers = () => {
  return {
    type: 'ONE_TRANSFERS',
  };
};

export const setTwoTransfers = () => {
  return {
    type: 'TWO_TRANSFERS',
  };
};

export const setThreeTransfers = () => {
  return {
    type: 'THREE_TRANSFERS',
  };
};

export const showCheapTickets = () => {
  return {
    type: 'CHEAP',
  };
};

export const showFastTickets = () => {
  return {
    type: 'FAST',
  };
};

export const showOptimalTickets = () => {
  return {
    type: 'OPTIMAL',
  };
};

export const loadTickets = (data: ticketsData) => {
  return {
    type: 'LOAD_TICKETS',
    payload: {
      tickets: data.tickets,
      downloadStatus: data.loading,
      errorStatus: data.error,
    },
  };
};

export const showMoreTickets = () => {
  return {
    type: 'SHOW_MORE_TICKETS',
  };
};

export const fetchTicketsAction = () => {
  return async (dispatch: Dispatch) => {
    const asyncGetTickets = async () => {
      const data = await getTickets();
      dispatch(loadTickets(data as ticketsData));
      if (data && data.loading) {
        asyncGetTickets();
      }
    };
    asyncGetTickets();
  };
};
