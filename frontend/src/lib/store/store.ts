// store.ts
"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import type { Reducer } from "redux";
import storage from "./storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// Slices
import { searchReducer } from "../features/searchSlice";
import { languageReducer } from "../features/languageSlice";
import { formReducer } from "../features/formSlice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { counterReducer } from "../features/counterSlice";

// 👇 Define Root State type
const rootReducer = combineReducers({
  search: searchReducer,
  language: languageReducer,
  form: formReducer,
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// 👇 Persist Config
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["search", "language", "form", "counter"],
};

// 👇 Conditionally apply persistence on client-side only
const isClient = typeof window !== "undefined";

const persistedReducer: Reducer = isClient
  ? persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer)
  : rootReducer;

// 👇 Store + middleware
export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = isClient ? persistStore(store) : null;

  return { store, persistor };
};

// 👇 Infer types for dispatch/hooks
export type AppStore = ReturnType<typeof makeStore>["store"];
export type AppDispatch = AppStore["dispatch"];
