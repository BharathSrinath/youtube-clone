import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState: {
        isSideBarOpen: true
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        },
        closeSidebar: (state) => {
            state.isSideBarOpen = false;
        },
        openSidebar: (state) => {
            state.isSideBarOpen = true;
        }
    }
});

export const {toggleSidebar, closeSidebar, openSidebar} = sideBarSlice.actions;
export default sideBarSlice.reducer;