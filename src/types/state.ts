export type filterState = { filters: string[] };

export enum tabsState {
  CHEAP = 'CHEAP',
  FAST = 'FAST',
  OPTIMAL = 'OPTIMAL',
}

export type TicketState = {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
};

export type ticketsData = {
  tickets: TicketState[];
  loading: boolean;
  error: boolean;
  toShow: number;
};

export type ticketsState = {
  tickets: TicketState[];
  loading: boolean;
  error: number;
  toShow: number;
};

export type State = {
  filterReducer: filterState;
  tabsReducer: tabsState;
  ticketsReducer: ticketsState;
};
