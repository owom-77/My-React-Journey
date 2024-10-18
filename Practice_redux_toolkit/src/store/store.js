import {configureStore} from '@reduxjs/toolkit';
import  todoSlice  from './todoSlice';

const store = configureStore({
    reducer : todoSlice,
})

export default store;
