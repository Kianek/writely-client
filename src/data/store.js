import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import journalsReducer from './journals/journalsSlice';
import entriesReducer from './entries/entriesSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    journals: journalsReducer,
    entries: entriesReducer,
  },
});
