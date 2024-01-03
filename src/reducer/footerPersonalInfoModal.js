import { createSlice } from "@reduxjs/toolkit";

const initState = {    
    footerPersonalInfoModal: false    
}

const footerPersonalInfoModalReducer = createSlice({
    name:'footerPersonalInfoModal',
    initialState: initState,
    reducers: {
        footerPersonalInfoModal: (state, action)=>{
            state.footerPersonalInfoModal = action.payload
        }
    }
});

export default footerPersonalInfoModalReducer.reducer;
export const {footerPersonalInfoModal} = footerPersonalInfoModalReducer.actions;