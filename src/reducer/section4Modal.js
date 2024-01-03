import { createSlice } from "@reduxjs/toolkit";

const initState = {    
    section4Modal: false    
}

const section4ModalReducer = createSlice({
    name:'section4Modal',
    initialState: initState,
    reducers: {
        section4Modal: (state, action)=>{
            state.section4Modal = action.payload
        }
    }
});

export default section4ModalReducer.reducer;
export const {section4Modal} = section4ModalReducer.actions;