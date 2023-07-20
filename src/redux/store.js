import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter-reducer';
import contactsReducer from './contacts-reducer';
import phonebookReducer from './phonebook-reducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    contact: phonebookReducer
  },
});

export default store;
