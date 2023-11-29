import { configureStore } from "@reduxjs/toolkit";
import loginSlicer from "./reducers/index.js";

const store = configureStore({
  reducer: {
    arranca: loginSlicer,
  },
});

export default store;
