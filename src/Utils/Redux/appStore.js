import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userLocation from "./userLocation";

 const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    userLocation: userLocation,
  }
 });

 export default appStore;