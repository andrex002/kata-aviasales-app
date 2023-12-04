export type filterState = {
  all: boolean;
  noTransfers: boolean;
  oneTransfers: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
};

export enum tabsState {
  CHEAP = 'CHEAP',
  FAST = 'FAST',
  OPTIMAL = 'OPTIMAL',
}

export type State = {
  filterReducer: filterState;
  tabsReducer: tabsState;
};
