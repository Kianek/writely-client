import status from '../status';
import { createSlice } from '@reduxjs/toolkit';
import {
  getAllAsync,
  selectJournal,
  createJournalAsync,
  updateJournalAsync,
  removeJournalAsync,
} from './journalThunks';

function setLoading(state) {
  if (state.status === status.idle) {
    state.status = status.loading;
  }
}

export const journalsSlice = createSlice({
  name: 'journals',
  initialState: {
    journals: [],
    selectedJournal: {},
    status: status.idle,
    error: null,
  },
  reducers: {
    journalsLoading(state) {
      if (state.status === status.idle) {
        state.status = status.loading;
      }
    },
    selectJournal(state, action) {
      state.selectedJournal = action.payload;
    },
  },
  extraReducers: {
    [getAllAsync.pending]: (state, action) => {
      setLoading(state);
    },
    [getAllAsync.fulfilled]: (state, action) => {
      state.status = status.idle;
      state.journals = action.payload;
    },
    [getAllAsync.rejected]: (state, action) => {
      state.status = status.idle;
    },
    [createJournalAsync.pending]: (state, action) => {
      setLoading(state);
    },
    [createJournalAsync.fulfilled]: (state, action) => {
      state.journals.unshift(action.payload);
    },
    [updateJournalAsync.pending]: (state, action) => {
      setLoading(state);
    },
    [updateJournalAsync.fulfilled]: (state, action) => {
      state.status = status.idle;
      const updatedJournal = action.payload;
      state.journals = state.journals.map((j) => {
        if (j.id === updatedJournal.id) {
          j = updatedJournal;
        }

        return j;
      });
    },
    [updateJournalAsync.rejected]: (state, action) => {
      state.status = status.idle;
      state.status = status.failed;
    },
    [removeJournalAsync.fulfilled]: (state, action) => {
      state.status = status.idle;
      state.journals = state.journals.filter((j) => j.id !== action.payload.id);
    },
  },
});

export {
  getAllAsync,
  selectJournal,
  createJournalAsync,
  updateJournalAsync,
  removeJournalAsync,
};

export const { getAll, getById } = journalsSlice.actions;
export default journalsSlice.reducer;
