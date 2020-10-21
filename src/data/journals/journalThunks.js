import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config';

export const selectJournal = createAction(
  'journals/selectJournal',
  (journal) => {
    return { payload: journal };
  }
);

// Async thunks
export const getAllAsync = createAsyncThunk(
  'journals/getAll',
  async (userId, thunkAPI) => {
    console.log(axios);
    const response = await axios.get(`/users/${userId}/journals`);
    return response.data;
  }
);

export const createJournalAsync = createAsyncThunk(
  'journals/createJournal',
  async ({ userId, title }, thunkAPI) => {
    const response = await axios.post(`/users/${userId}/journals`, { title });
    return response.data;
  }
);

export const updateJournalAsync = createAsyncThunk(
  'journals/updateJournal',
  async (journal, thunkAPI) => {
    const response = await axios.patch(
      `/users/${journal.userId}/journals/${journal.id}`,
      journal
    );
    return response.data;
  }
);

export const removeJournalAsync = createAsyncThunk(
  'journals/removeJournal',
  async (journal, thunkAPI) => {
    await axios.delete(`/users/${journal.userId}/journals/${journal.id}`);
    return journal;
  }
);
