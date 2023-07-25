import { createSlice } from "@reduxjs/toolkit";

// const loadContactsFromLocalStorage = () => {
//   const savedContacts = localStorage.getItem('PhonebookContacts');
//   if (savedContacts) {
//     return JSON.parse(savedContacts);
//   }
//   return [];
// };

const initialState = {
  contacts: [],
  filter: ''
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [state.contacts, action.payload];
      // localStorage.setItem('PhonebookContacts', JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      // localStorage.setItem('PhonebookContacts', JSON.stringify(state.contacts));
    }
  }
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addContacts, deleteContact } = contactsSlice.actions;
export const { addFilter } = filterSlice.actions;

const rootReducer = {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer
};

export default rootReducer;
