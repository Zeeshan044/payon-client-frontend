import menuSlice from "@/features/menu/menuSlice";
import modalSlice from "@/features/modal/modalSlice";
import categorySlice from "@/features/category/categorySlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    modal: modalSlice,
    category: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
