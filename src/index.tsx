import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { fetchTicketsAction } from './store/action';
import { filterReducer } from './store/reducers/filterReducer';
import { tabsReducer } from './store/reducers/tabsReducer';
import { ticketsReducer } from './store/reducers/ticketsReducer';
import './index.scss';
import { App } from './components/app/app';

const store = configureStore({
  reducer: {
    tabsReducer: tabsReducer,
    filterReducer: filterReducer,
    ticketsReducer: ticketsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(fetchTicketsAction()).then(() => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
