import { configureStore } from '@reduxjs/toolkit'
import customerReducer from '../Reducers/CustomerSlice';
export default configureStore({
  reducer: {
    customers : customerReducer
  },
})