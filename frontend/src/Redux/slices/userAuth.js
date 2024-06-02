import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: {
        email: '',
        otp:'',
        token: '',
    }
}

const emailSlice = createSlice({
    name: "auth", 
    initialState,
    reducers: {
        email_verification: (state, action) => {
            state.auth.email = action.payload;
           
        },
        OTP_state : (state,action)=>{
            state.auth.otp = action.payload;
        },
        token_ : (state,action)=>{
            state.auth.token = action.payload;
        },
        reset_token : (state,action)=>{
            state.auth.token = '';
        }
        }

});

export const { email_verification, OTP_state, token_, reset_token} = emailSlice.actions;
export default emailSlice.reducer;
