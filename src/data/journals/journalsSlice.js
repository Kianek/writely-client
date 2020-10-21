import status from '../status';
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from '../../config';

// Actions
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

export const {
  getAll,
  getById,
  createJournal,
  updateJournal,
  removeJournal,
} = journalsSlice.actions;
export default journalsSlice.reducer;
