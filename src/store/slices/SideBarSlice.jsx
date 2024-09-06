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
        }
    }
});

export const {toggleSidebar, closeSidebar} = sideBarSlice.actions;
export default sideBarSlice.reducer;