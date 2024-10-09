import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
          name:'amount',
          initialState: {
                    data:[],
          },
          reducers:{
                    addAmount: (state, action) =>{
                              state.data.push(action.payload);
                    },
          },
})

export const {addAmount} = amountSlice.actions;
export default amountSlice.reducer;