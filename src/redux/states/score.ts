import { createSlice } from "@reduxjs/toolkit";
import { ScoreInterface } from "../../interfaces/ScoreInterface";
const initialState: ScoreInterface = {
  incorrectScorePoints: 0,
  correctScorePoints: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementCorrectScore: (state) => {
      state.correctScorePoints += 1;
    },
    decrementCorrectScore: (state) => {
      state.incorrectScorePoints += 1;
    },
  },
});

export const { incrementCorrectScore, decrementCorrectScore } =
  scoreSlice.actions;

export default scoreSlice.reducer;
