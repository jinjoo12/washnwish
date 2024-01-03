import { createSlice } from "@reduxjs/toolkit";

const initState = {    
    mainModal: true    
}

const mainModalReducer = createSlice({
    name:'mainModal',
    initialState: initState,
    reducers: {
        mainModal: (state, action)=>{
            state.mainModal = action.payload
        }
    }
});

export default mainModalReducer.reducer;
export const { mainModal } = mainModalReducer.actions;