import status from '../status';
import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const selectEntry = createAction('entries/selectEntry', ({ id }) => {
  return { payload: { id: id } };
});

export const loadEntries = createAction(
  'entries/loadEntries',
  ({ entries }) => {
    return { payload: entries };
  }
);

export const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    entries: [],
    selectedEntry: {},
    status: status.idle,
    error: null,
  },
  reducers: {
    selectEntry(state, action) {
      state.selectedEntry = state.entries.find(
        (entry) => entry.id === action.payload.id
      );
    },
    loadEntries(state, action) {
      state.entries = action.payload;
      const entry = action.payload[0];
      // If list is not empty, select the first entry
      state.selectedEntry = entry ? entry : {};
    },
    addEntry(state, action) {
      state.entries.shift(action.payload);
    },
    updateEntry(state, action) {
      const { id, title, body } = action.payload;
      const entry = state.entries.find(id);
      if (entry) {
        entry.title = title;
        entry.body = body;
      }
    },
    removeEntry(state, action) {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      );
    },
  },
});

export const { addEntry, updateEntry, removeEntry } = entriesSlice.actions;
export default entriesSlice.reducer;
