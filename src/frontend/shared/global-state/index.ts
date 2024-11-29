import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { cardsSlice } from "./slices/cards";
import { inputsSlice } from "./slices/inputs";
import { linksSlice } from "./slices/links";
import { popupSlice } from "./slices/popup";

const slices = {
  cardsSlice,
  linksSlice,
  popupSlice,
  inputsSlice,
};

type TReducers<S extends typeof slices> = {
  [K in keyof S]: S[K] extends { reducer: Reducer<infer State> }
    ? Reducer<State>
    : never;
};

export const rootStore = configureStore({
  reducer: combineReducers(
    Object.fromEntries(
      Object.entries(slices)?.map(([key, { reducer }]) => [key, reducer])
    ) as TReducers<typeof slices>
  ),
  devTools: true,
});

export const useDispatch_ = useDispatch.withTypes<typeof rootStore.dispatch>();
export const useSelector_ =
  useSelector.withTypes<ReturnType<typeof rootStore.getState>>();
export const useStore_ =
  useStore.withTypes<ReturnType<() => typeof rootStore>>();
