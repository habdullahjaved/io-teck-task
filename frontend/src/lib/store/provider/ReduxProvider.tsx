"use client";

import { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../store";
import { AppStore } from "../store";

interface ReduxProviderProps {
  children: ReactNode;
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  const { store }: { store: AppStore } = useMemo(() => makeStore(), []);

  return <Provider store={store}>{children}</Provider>;
}
