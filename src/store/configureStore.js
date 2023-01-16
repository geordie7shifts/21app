import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, legacy_createStore } from "redux";
// import persistStore from "redux-persist/es/persistStore";
// import persistReducer from "redux-persist/lib/persistReducer";
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { reducer as gameReducer } from "./reducers/gameReducer";
import { reducer as playerReducer } from "./reducers/playerReducer";
import { reducer as settingsReducer } from "./reducers/settingsReducer";

export const configureStore = () => {
  const rootReducer = combineReducers({
    games: gameReducer,
    players: playerReducer,
    settings: settingsReducer
  });

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = legacy_createStore(persistedReducer);

  const persistor = persistStore(store);

  return { store, persistor };
};