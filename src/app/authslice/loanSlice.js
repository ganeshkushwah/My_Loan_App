import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loans: [],
};

const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    setLoans: (state, action) => {
      state.loans = action.payload;
    },
   
  },
});

export const { setLoans } = loanSlice.actions;
export const selectLoans = (state) => state.loan.loans;
export default loanSlice.reducer;
