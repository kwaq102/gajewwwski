import { configureStore } from '@reduxjs/toolkit';
import setMenu from '../features/menuSlice';
import setArrowTop from '../features/arrowSlice';

export const store = configureStore({
    reducer: {
        menu: setMenu,
        arrow: setArrowTop,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
