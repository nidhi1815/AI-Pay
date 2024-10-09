import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./amountSlice";
import userReducer from "./userSlice";


const store = configureStore({
          reducer:{
                    amount: amountReducer,
                    user: userReducer,
          }
})

export default store;