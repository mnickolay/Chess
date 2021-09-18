import { Action, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { IAppState, reducers } from "./reducers";

export type Thunk<
  TReturnValue = void,
  TExtraArgument = void,
  TActions extends Action = Action
> = ThunkAction<TReturnValue, IAppState, TExtraArgument, TActions>;

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(reducers, composedEnhancers);
