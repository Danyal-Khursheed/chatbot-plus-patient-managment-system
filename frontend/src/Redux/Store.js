
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/userAuth'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore';
const persistConfig ={
    key : "root",
    version :1,
    storage
}

const reducer = combineReducers({
    auth: authReducer 
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer : persistedReducer
});
export const persistor = persistStore(store);
