import axios from '../../config';
import { createAsyncThunk } from '@reduxjs/toolkit';

// addAsync
export const addEntryAsync = createAsyncThunk(
  'entries/addEntry',
  ({}, thunkAPI) => {}
);

// updateAsync
export const updateEntryAsync = createAsyncThunk(
  'entries/updateAsync',
  ({}, thunkAPI) => {}
);

// removeAsync
export const removeEntryAsync = createAsyncThunk(
  'entries/removeEntry',
  (id, thunkAPI) => {}
);
