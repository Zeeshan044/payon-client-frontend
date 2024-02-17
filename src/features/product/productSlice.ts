import { IProductResponse } from "@/types/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  selectedProduct: IProductResponse | null;
}

const initialState: State = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (
      state,
      action: PayloadAction<IProductResponse | null>
    ) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
