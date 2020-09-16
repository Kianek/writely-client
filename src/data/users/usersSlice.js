import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: { signedIn: false, user: {} },
  reducers: {
    signIn: (state, action) => {
      state.signedIn = true;
      state.user = action.payload;
    },
    signOut: (state) => (state.signedIn = false),
  },
});

export const { signIn, signOut } = usersSlice.actions;
export default usersSlice.reducer;
