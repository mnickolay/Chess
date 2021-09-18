import { combineReducers } from "redux";
import { board, IBoardState } from "./board";

export interface IAppState {
  board: IBoardState;
}

export const reducers = combineReducers<IAppState>({ board });
