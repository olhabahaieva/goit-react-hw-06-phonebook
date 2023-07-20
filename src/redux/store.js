import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter-reducer';


const store = configureStore({
  reducer: {
    filterReducer,
  },
})

export default store;