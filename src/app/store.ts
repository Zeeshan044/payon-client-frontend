import menuSlice from "@/features/menu/menuSlice";
import modalSlice from "@/features/modal/modalSlice";
import categorySlice from "@/features/category/categorySlice";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/features/product/productSlice";
import restaurantSlice from "@/features/restaurant/restaurantSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    modal: modalSlice,
    category: categorySlice,
    product: productSlice,
    restaurant: restaurantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
