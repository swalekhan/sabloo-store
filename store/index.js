
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
    configureStore({
        reducer: {
            cart: cartReducer
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);



