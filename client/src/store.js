import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Optional: add other middleware if needed, though `redux-thunk` is included by default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
