
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../api/apiService';

export const createLoanRequest = createAsyncThunk(
  'loan/createLoanRequest',
  async (loanData, { rejectWithValue }) => {
    try {
      const response = await apiService.post('/loan/request', loanData, {
        headers: {
          Authorization: 'YOUR_USER_AUTH_TOKEN', 
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const approveLoan = createAsyncThunk(
  'loan/approveLoan',
  async (loanId, { rejectWithValue }) => {
    try {
      const response = await apiService.put('/loan/approve', { loanId }, {
        headers: {
          Authorization: 'YOUR_ADMIN_AUTH_TOKEN',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
