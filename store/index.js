
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import { createWrapper } from 'next-redux-wrapper';
import authreducer from './authSlice'

const makeStore = () =>
    configureStore({
        reducer: {
            cart: cartReducer,
            auth:authreducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);



