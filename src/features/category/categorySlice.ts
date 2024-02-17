import { ICategoryResponse } from "@/types/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  selectedCategory: ICategoryResponse | null;
}

const initialState: State = {
  selectedCategory: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (
      state,
      action: PayloadAction<ICategoryResponse | null>
    ) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
