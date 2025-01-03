import { configureStore } from '@reduxjs/toolkit';
import setMenu from '../features/menuSlice';
import setArrowTop from '../features/arrowSlice';
import setLoading from '../features/loadingSlice';

export const store = configureStore({
    reducer: {
        menu: setMenu,
        arrow: setArrowTop,
        loading: setLoading,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
