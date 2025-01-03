import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
};

const setLoading = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.loading = true;
        },

        hiddenLoading: (state) => {
            state.loading = false;
        },
        handleLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { showLoading, hiddenLoading, handleLoading } = setLoading.actions;
export default setLoading.reducer;
