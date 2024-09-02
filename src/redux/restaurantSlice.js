import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//api call or asynchronous function call using Thunk
//first argument is name of slice + / + name of thunk function

export const fetchRestaurant = createAsyncThunk('restaurantSlice/fetchRestaurant', () => {
    const result = axios.get('./restaurant.json').then(response => response.data);
    console.log('====response from thunk====');
    console.log(result);
    return result;
})

const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    initialState: {
        loading: false, //pending state.ie; here, API call in progress.(Not only API calls)
        allRestaurant: [], // resolve stage
        error: "" //rejected state- return error
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true;

        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false;
            state.allRestaurant = action.payload;
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading = false;
            state.allRestaurant=[],
            state.error = action.error.message
        })
    }
})

export default restaurantSlice.reducer;


//Redux is  a synchronous operation but API call or file r/w, etc... are  asynchronous operation.So to deal with asynchronous operation in redux we are using redux Thunk.Thunk is not a part of slice, separate method in redux toolkit.