import { TicketState } from './state';

export type setNumberTransfersAction = {
  type: string;
};

export type tabsAction = {
  type: string;
};

export type LoadTicketsAction = {
  type: string;
  payload?: {
    tickets: TicketState[];
    downloadStatus: boolean;
    errorStatus: boolean;
  };
};
