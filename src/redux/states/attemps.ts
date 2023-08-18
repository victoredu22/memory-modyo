import { createSlice } from "@reduxjs/toolkit";
import { AttempsInterface } from "../../interfaces/AttempsInterface";
import { initialCardValue } from "../../types/attemptsEmpty";

const initialState: AttempsInterface = {
  firstAttemp: initialCardValue,
  secondAttemp: initialCardValue,
};

export const attempSlice = createSlice({
  name: "attemp",
  initialState,
  reducers: {
    updateAttemp: (state, action) => {
      const { attemp, uuid, stateAttemp } = action.payload;

      if (attemp === "first") {
        return {
          ...state,
          firstAttemp: { uuid, state: stateAttemp },
        };
      } else if (attemp === "second") {
        return {
          ...state,
          secondAttemp: { uuid, state: stateAttemp },
        };
      }
      return state;
    },
    resetAttemp: (state) => {
      return {
        ...state,
        firstAttemp: initialCardValue,
        secondAttemp: initialCardValue,
      };
    },
  },
});

export const { updateAttemp, resetAttemp } = attempSlice.actions;
export default attempSlice.reducer;
