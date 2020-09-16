import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
  name: 'entries',
  initialState: { entries: [], selectedEntry: {} },
  reducers: {
    select: (state, action) => {
      state.selectedEntry = state.entries.find(action.payload.id);
    },
    add: (state, action) => {},
    update: (state, action) => {},
    remove: (state, action) => {},
  },
});

export const { add, update, remove } = entriesSlice.actions;
export default entriesSlice.reducer;
