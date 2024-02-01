import menuSlice from "@/features/menu/menuSlice";
import modalSlice from "@/features/modal/modalSlice";
import tableSlice from "@/features/table/tableSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    modal: modalSlice,
    table: tableSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
