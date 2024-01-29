import { createSlice } from "@reduxjs/toolkit";

interface FormVisibilityState {
  isVisible: boolean;
}

const initialState: FormVisibilityState = {
  isVisible: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    showForm: (state) => {
      state.isVisible = true;
    },
    hideForm: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showForm, hideForm } = menuSlice.actions;

export default menuSlice.reducer;
