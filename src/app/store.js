import {configureStore} from '@reduxjs/toolkit';
import contentReducer from '../features/contentSlice';


export const store = configureStore({
  reducer: {
    contents: contentReducer,
  },
});
