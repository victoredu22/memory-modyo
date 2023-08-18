import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./states/cards";
import { CardInterface } from "../interfaces/CardInterface";
import { AttempsInterface } from "../interfaces/AttempsInterface";
import { attempSlice } from "./states/attemps";
import { ScoreInterface } from "../interfaces/ScoreInterface";
import { scoreSlice } from "./states/score";

export interface AppStore {
  cards: CardInterface[];
  attemps: AttempsInterface;
  scores: ScoreInterface;
}

export default configureStore<AppStore>({
  reducer: {
    cards: cardSlice.reducer,
    attemps: attempSlice.reducer,
    scores: scoreSlice.reducer,
  },
});
