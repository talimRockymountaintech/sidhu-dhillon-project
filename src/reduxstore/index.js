import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import plan_slice from './plan/plan_slice'
const presistConfig ={
    key:"root",
    storage
}

const rootReducer = combineReducers({
        plan:plan_slice
})

const persistedReducer=persistReducer(presistConfig,rootReducer);

export const store=configureStore({
reducer:persistedReducer,
middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          }
    })
})
export const persistor = persistStore(store);