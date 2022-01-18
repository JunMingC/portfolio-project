import { configureStore } from '@reduxjs/toolkit'
import infoBarSlice from './features/infoBarSlice';
import overlaySlice from './features/overlaySlice';

export const store = configureStore({
    reducer: {
        infoBar: infoBarSlice,
        overlay: overlaySlice,
    },
});