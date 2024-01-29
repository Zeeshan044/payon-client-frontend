import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Table {
  id: number;
  name: string;
}

interface TableState {
  tables: Table[];
  tableName: any;
}

const initialTableState: TableState = {
  tables: [],
  tableName: { id: 1, name: "" },
};

const tableSlice = createSlice({
  name: "table",
  initialState: initialTableState,
  reducers: {
    addTable: (state, action: PayloadAction<Table>) => {
      state.tables.push(action.payload);
      console.log(action.payload);
    },
    updateTableName: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      state.tableName = { ...action.payload };
    },
  },
});

export const { addTable, updateTableName } = tableSlice.actions;

export default tableSlice.reducer;
