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
    updateEntry(state, action) {},
    deleteEntry(state, action) {},
  },
});

const { actions, reducer } = entriesSlice;
export const { fetchEntries, fetchEntryById, updateEntry, deleteEntry } =
  actions;

export const selectEntry = (state, id) => {
  state.entries.find((entry) => entry.id === id);
};

export const selectEntries = (state) => state.entries;

export default reducer;
