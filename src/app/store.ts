import menuSlice from "@/features/menu/menuSlice";
import modalSlice from "@/features/modal/modalSlice";
import tableSlice from "@/features/table/tableSlice";
import { menuApi } from "@/services/api/menu-api.service";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    modal: modalSlice,
    table: tableSlice,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
