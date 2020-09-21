import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
  name: 'entries',
  initialState: { entries: [], selectedEntry: {} },
  reducers: {
    select: (state, action) => {
      state.selectedEntry = state.entries.find(action.payload.id);
    },
    add: (state, action) => {
      state.entries.push(action.payload);
    },
    update: (state, action) => {
      state.entries = state.entries.map((entry) => {
        if (entry.id === action.payload.id) {
          entry = action.payload;
        }
      });
    },
    remove: (state, action) => {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      );
    },
  },
});

export const { add, update, remove } = entriesSlice.actions;
export default entriesSlice.reducer;
