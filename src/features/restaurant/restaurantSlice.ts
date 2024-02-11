import { IProductResponse, IRestaurantResponse } from "@/types/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  selectedrestaurant: IRestaurantResponse | null;
}

const initialState: State = {
  selectedrestaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setSelectedrestaurant: (
      state,
      action: PayloadAction<IRestaurantResponse | null>
    ) => {
      state.selectedrestaurant = action.payload;
    },
  },
});

export const { setSelectedrestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
