import {configureStore} from '@reduxjs/toolkit';
import  storeSlice  from './storeSlice';

export const store = configureStore({
    reducer : storeSlice,
});

