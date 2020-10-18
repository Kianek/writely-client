import status from '../status';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config';

export const signInAsync = createAsyncThunk(
  'users/signIn',
  async ({ email, password, rememberMe }, thunkAPI) => {
    const response = await axios.post('/auth/login', {
      email,
      password,
      rememberMe,
    });
    return response.data;
  }
);

export const signOutAsync = createAsyncThunk('users/signOut', async () => {
  try {
    await axios.get('/auth/logout');
  } catch (err) {}
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    signedIn: false,
    user: null,
    status: status.idle,
    error: null,
  },
  reducers: {
    usersLoading(state, action) {
      if (state.status === status.idle) {
        state.status = status.loading;
      }
    },
  },
  extraReducers: {
    [signInAsync.pending]: (state, action) => {
      state.status = status.loading;
    },
    [signInAsync.fulfilled]: (state, action) => {
      state.signedIn = true;
      state.user = action.payload;
      state.status = status.idle;
    },
    [signInAsync.rejected]: (state, action) => {
      state.status = status.failed;
    },
    [signOutAsync.fulfilled]: (state, action) => {
      state.user = null;
      state.signedIn = false;
    },
  },
});

export const { usersLoading, signIn, signOut } = usersSlice.actions;

export default usersSlice.reducer;
