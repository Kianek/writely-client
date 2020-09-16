import { createSlice } from '@reduxjs/toolkit';

export const journalsSlice = createSlice({
  name: 'journals',
  initialState: { journals: [], selectedJournal: {} },
  reducers: {
    getAll: (state) => state.journals,
    getOne: (state, action) => {
      state.selectedJournal = state.journals.find(
        (journal) => journal.id === action.payload
      );
    },
    create: (state, action) => state.journals.unshift(action.payload),
    update: (state, action) => {
      state.journals = state.journals.map((journal) => {
        if (journal.id === action.payload.id) {
          journal = action.payload;
        }
        return journal;
      });
    },
    remove: (state, action) =>
      (state.journals = state.journals.filter(
        (journal) => journal.id !== action.payload.id
      )),
  },
});

export const { getAll, getOne, create, update, remove } = journalsSlice.actions;
export default journalsSlice.reducer;
