/** @format */

// ** Redux Imports
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducers from "./reducers";

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      // immutableCheck: {
      //   ignoredPaths: ['authSlice'],
      // },
    });
  },
});
const persistor = persistStore(store);

export { store, persistor };
