import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

const setMenu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        showMenu: (state) => {
            state.value = true;
        },
        hiddenMenu: (state) => {
            state.value = false;
        },

        oppositeMenu: (state, action) => {
            state.value = !action.payload
        },


    },
});

export const { showMenu, hiddenMenu, oppositeMenu } = setMenu.actions;
export default setMenu.reducer;
