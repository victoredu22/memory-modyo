import { createSlice, current } from "@reduxjs/toolkit";
import { CardInterface } from "../../interfaces/CardInterface";

const initialState: CardInterface[] = [];

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    loadCards: (state, action) => {
      return [...current(state), ...action.payload];
    },
    updateCardState: (state, action) => {
      return current(state).map((item) =>
        item.uuid === action.payload.uuid
          ? { ...item, state: true }
          : { ...item }
      );
    },
    updateStateCard: (state, action) => {
      return current(state).map((item) =>
        item.uuid === action.payload.uuid &&
        item.copyUuid === action.payload.copyUuid
          ? { ...item, state: true }
          : { ...item }
      );
    },
    updateStateFalseCard: (state, action) => {
      return current(state).map((item) =>
        item.uuid === action.payload.uuid
          ? { ...item, state: false }
          : { ...item }
      );
    },
  },
});

export const {
  loadCards,
  updateCardState,
  updateStateCard,
  updateStateFalseCard,
} = cardSlice.actions;
export default cardSlice.reducer;
