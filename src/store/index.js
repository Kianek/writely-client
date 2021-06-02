import { configureStore } from '@reduxjs/toolkit';
import users from './users';
import journals from './journals';
import entries from './entries';

export default configureStore({
  reducer: {
    users,
    journals,
    entries,
  },
});
