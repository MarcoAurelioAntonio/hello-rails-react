import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api.js';

// Actions
const GET_MESSAGE = 'GET_MESSAGE';

const initialState = {
  randomMessage: '',
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Thunk
export const getMessage = createAsyncThunk(GET_MESSAGE, async () => {
  try {
    return await api.fetchRandomMessage();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getMessage.fulfilled, (state, action) => ({
        ...state,
        randomMessage: action.payload,
        status: 'succeeded',
      }))
      .addCase(getMessage.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const message = (state) => state.message.randomMessage;
export const messageStatus = (state) => state.message.status;

export default messageSlice.reducer;