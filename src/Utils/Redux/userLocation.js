import { createSlice } from "@reduxjs/toolkit";
const locationSplice = createSlice({
  name: "userLocation",
  initialState: {
    latitude: 30.900965,
    longitude: 75.8572758,
  },
  reducers: {
    setUserLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
})


export const { setUserLocation } = locationSplice.actions;
export default locationSplice.reducer;