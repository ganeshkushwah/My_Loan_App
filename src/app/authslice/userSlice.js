import { createSlice } from '@reduxjs/toolkit';
import apiService from '../api/apiService';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;


export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await apiService.post('/user/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      
      },
    });

 
    dispatch(setUser(response.data));
    console.log('User registered:', response.data);
  } catch (error) {
    console.error('Registration failed', error);
  }
};
