import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import sandwichSlice from "./sandwichSlice";
import librarySlice from "./librarySlice";

export const storeRTK = configureStore({
  reducer: {
    counter: counterReducer,
    sandwich: sandwichSlice,
    library: librarySlice,
  },
});

export type RootState = ReturnType<typeof storeRTK.getState>;

export type AppDispatch = typeof storeRTK.dispatch;
