import { IRestaurantResponse } from "@/types/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  selectedRestaurant: IRestaurantResponse | null;
}

const initialState: State = {
  selectedRestaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setSelectedrestaurant: (
      state,
      action: PayloadAction<IRestaurantResponse | null>
    ) => {
      state.selectedRestaurant = action.payload;
    },
  },
});

export const { setSelectedrestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
