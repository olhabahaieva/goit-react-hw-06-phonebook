import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter-reducer';


const store = configureStore({
  reducer: {
    filter: filterReducer
    }
})

export default store;