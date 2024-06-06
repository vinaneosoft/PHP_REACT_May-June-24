import { createSlice } from '@reduxjs/toolkit'
import { getAllCustomers } from '../../httpmodel/http'

export const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    value: [],
  },
  reducers: {
    loaddata:(state)=>{
        const response=getAllCustomers();
        state=response.data; // we are considering mutable
    }
  },
})

// Action creators are generated for each case reducer function
export const { loaddata } = customerSlice.actions
export default customerSlice.reducer