"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import cartReducer  from "./reducers";


const rootReducer = combineReducers({
  cartReducer: cartReducer ,
},);

export const store = configureStore({
  reducer: rootReducer,

 });
