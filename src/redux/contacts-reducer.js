import { createSlice } from "@reduxjs/toolkit";

const loadContactsFromLocalStorage = () =>{
    const savedContacts = localStorage.getItem('PhonebookContacts');
    if(savedContacts){
        return JSON.parse(savedContacts)
    }
    return [];
}
const initialState = {
    contacts: loadContactsFromLocalStorage()
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContacts: (state, action)=>{
            state.contacts.push(action.payload)
            localStorage.setItem('PhonebookContacts', JSON.stringify(state.contacts));
        },
        deleteContact: (state, action)=>{
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            localStorage.setItem('PhonebookContacts', JSON.stringify(state.contacts))
        }
    }
})

export const {addContacts, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;