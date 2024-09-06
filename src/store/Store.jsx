import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./slices/SideBarSlice";

const store = configureStore({
    reducer: {
        sideBar: SideBarSlice,
    }
});

export default store;