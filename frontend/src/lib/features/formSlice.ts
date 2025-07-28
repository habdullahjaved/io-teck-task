import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormState = {
  email: string;
  submitted: boolean;
  error?: string;
};

const initialState: FormState = {
  email: "",
  submitted: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setSubmitted(state, action: PayloadAction<boolean>) {
      state.submitted = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});

export const { setEmail, setSubmitted, setError } = formSlice.actions;
export const formReducer = formSlice.reducer;
export default formSlice.reducer;
