import { createSlice } from '@reduxjs/toolkit';
import { status } from '../constants';

export const entriesSlice = createSlice({
  name: 'entries',
  initialState: {
    entries: [],
    selectedEntry: {},
    status: status.idle,
    error: null,
  },
  reducers: {
    createEntry(state, action) {},
    fetchEntries(state, action) {},
    fetchEntryById(state, action) {},
    loadEntries(state, action) {
      state.entries = action.payload.entries;
    },
    selectEntryById(state, action) {
      state.selectedEntry = state.entries.find(
        (e) => e.id === action.payload.id
      );
      console.log(state.selectedEntry);
    },
    updateEntry(state, action) {},
    deleteEntry(state, action) {},
  },
});

const { actions, reducer } = entriesSlice;
export const {
  deleteEntry,
  fetchEntries,
  fetchEntryById,
  loadEntries,
  selectEntryById,
  updateEntry,
} = actions;

export const selectCurrentEntry = (state) => {
  return state.entries.selectedEntry;
};

export const selectEntries = (state) => state.entries.entries;

export default reducer;
