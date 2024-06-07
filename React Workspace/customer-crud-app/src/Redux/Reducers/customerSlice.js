import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllCustomers } from '../../httpmodel/http'

export const fetchCustomers=createAsyncThunk('fetchCustomers', async ()=>{
    const response=await getAllCustomers();
    return response.data;
} )

export const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    isLoading:false,
    data:null,
    isError:false
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchCustomers.pending,(state, action)=>{
        state.isLoading=true;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action)=>{
        state.isLoading=false;
        state.data=action.payload;
    });
    builder.addCase(fetchCustomers.rejected, (state, action)=>{
        state.isError=true;
        console.log("Error", action.payload);
    });
  }
})


export default customerSlice.reducer