import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice, filterSlice } from './phonebook-reducer';
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export default rootReducer;
