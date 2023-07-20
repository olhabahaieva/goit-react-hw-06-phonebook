import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contact: []
}

export const phoneBookSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact:(state, action)=>{
            state.contact.push(action.payload)
        }
    }
})

export const {addContact} = phoneBookSlice.actions;
export default phoneBookSlice.reducer;

