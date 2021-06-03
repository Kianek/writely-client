import { createSlice } from '@reduxjs/toolkit';
import { status } from '../constants';

const authSlice = createSlice({
  name: 'users',
  initialState: {
    loading: 'idle',
    signedIn: false,
    user: {},
  },
  reducers: {
    deleteAccount(state, action) {},
    updateEmail(state, action) {},
    updatePassword(state, action) {},
    signIn(state, action) {
      if (state.loading === status.idle) {
        state.loading = status.pending;
      }
    },
    signOut(state, action) {},
  },
});

const { actions, reducer } = authSlice;
export const { deleteAccount, signIn, signOut, updateEmail, updatePassword } =
  actions;

export const isAuthenticated = (state) => state.signedIn;

export default reducer;
