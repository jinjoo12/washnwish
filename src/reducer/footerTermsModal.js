import { createSlice } from "@reduxjs/toolkit";

const initState = {    
    footerTermsModal: false    
}

const footerTermsModalReducer = createSlice({
    name:'footerTermsModal',
    initialState: initState,
    reducers: {
        footerTermsModal: (state, action)=>{
            state.footerTermsModal = action.payload
        }
    }
});

export default footerTermsModalReducer.reducer;
export const {footerTermsModal} = footerTermsModalReducer.actions;