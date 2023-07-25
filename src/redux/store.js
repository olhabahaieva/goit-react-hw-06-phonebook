import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './phonebook-reducer';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export default rootReducer;
