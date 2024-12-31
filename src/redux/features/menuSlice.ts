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
            console.log('menu: ' + state.value)

        },
        hiddenMenu: (state) => {
            state.value = false;
            console.log('menu: ' + state.value)

        },
        oppositeMenu: (state, action) => {
            console.log('menu przed: ' + state.value)

            state.value = !action.payload

            console.log('menu po: ' + state.value)
        },


    },
});

export const { showMenu, hiddenMenu, oppositeMenu } = setMenu.actions;

export default setMenu.reducer;
