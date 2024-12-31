import { configureStore } from '@reduxjs/toolkit';
import setMenu from '../features/menuSlice';

export const store = configureStore({
    reducer: {
        menu: setMenu,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
