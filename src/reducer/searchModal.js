import { createSlice } from "@reduxjs/toolkit";

const initState = {    
    searchModal: false    
}

const searchModalReducer = createSlice({
    name:'searchModal',
    initialState: initState,
    reducers: {
        searchModal: (state, action)=>{
            state.searchModal = action.payload
        }
    }
});

export default searchModalReducer.reducer;
export const {searchModal} = searchModalReducer.actions;