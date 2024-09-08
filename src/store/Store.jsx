import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./slices/SideBarSlice";
import searchSlice from "./slices/SearchCacheSlice.jsx";

const store = configureStore({
    reducer: {
        sideBar: SideBarSlice,
        search: searchSlice
    }
});

export default store;