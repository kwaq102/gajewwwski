import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isVisibleArrow: false,
};

const setArrowTop = createSlice({
    name: 'arrow',
    initialState,
    reducers: {
        handleArrow: (state, action) => {
            state.isVisibleArrow = action.payload;
        }
    }
})

export const { handleArrow } = setArrowTop.actions;

export default setArrowTop.reducer;
