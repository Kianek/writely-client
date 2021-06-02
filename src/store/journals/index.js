import { status } from '../constants';
import { createSlice } from '@reduxjs/toolkit';
import mockJournals from './mock-journals';

export const journalsSlice = createSlice({
  name: 'journals',
  initialState: {
    journals: mockJournals,
    selectedJournal: {},
    status: status.idle,
    error: null,
  },
  reducers: {
    createJournal(state, action) {},
    fetchJournals(state, action) {},
    fetchJournalById(state, action) {},
    selectJournalById(state, action) {
      state.selectedJournal = state.journals.find(
        (j) => j.id === action.payload.id
      );
      console.log(state.selectedJournal);
    },
    updateJournal(state, action) {},
    deleteJournal(state, action) {},
  },
});

const { actions, reducer } = journalsSlice;
export const {
  fetchJournals,
  fetchJournalById,
  selectJournalById,
  updateJournal,
  deleteJournal,
} = actions;

export const selectJournals = (state) => state.journals.journals;

export default reducer;
