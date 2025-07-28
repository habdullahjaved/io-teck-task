import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LanguageState = {
  locale: "en" | "ar";
};

const initialState: LanguageState = {
  locale: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<"en" | "ar">) {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
export default languageSlice.reducer;
