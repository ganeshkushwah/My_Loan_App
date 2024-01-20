import { configureStore } from '@reduxjs/toolkit';
import userReducer from './authslice/userSlice'; 

import loanReducer from './authslice/loanSlice'; 

export const store = configureStore({
  reducer: {
    loan: loanReducer,
    user: userReducer,
  },
});
