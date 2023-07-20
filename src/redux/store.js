import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter-reducer';
import contactsReducer from './contacts-reducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
});

export default store;
