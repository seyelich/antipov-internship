import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancer = composeEnhancers(applyMiddleware(
//   thunkMiddleware
// ));


export const store = configureStore({
  reducer: rootReducer
  // enhancers: [ enhancer ],
});
