import { createSlice } from "@reduxjs/toolkit";

const SearchCacheSlice = createSlice({
    name: "search",
    initialState: {},
    reducers:{
        cachedResults: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    },
});

export const {cachedResults} = SearchCacheSlice.actions;
export default SearchCacheSlice.reducer;