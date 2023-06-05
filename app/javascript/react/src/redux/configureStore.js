import {
  applyMiddleware,
  configureStore
} from '@reduxjs/toolkit';
import messageReducer from './greeting.js';

// Redux store
const store = configureStore(
  {
    reducer: {
      message: messageReducer,
    }
  },
);

export default store;
