/** @format */
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "./auth";

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["authUser"],
};

const rootReducers = {
  auth: persistReducer(persistConfig, auth),
};

export default rootReducers;
