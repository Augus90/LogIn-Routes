import { createSlice } from "@reduxjs/toolkit";
import { STATES } from "../actions";

const InitialState = [
  {
    name: "",
    id: null,
  },
];

export const loginSlice = createSlice({
  name: "arranca",
  initialState: InitialState,
  reducer: {
    iniciar: (state, action) => {
      [...state, { name: action.payload.name, id: action.payload.id }];
    },
    // CLEAR: (state) => {
    //   state = InitialState;
    // },
  },
});

export const { iniciar } = loginSlice.actions;

export default loginSlice.reducer;
