const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name:"auth",
    initialState:{isLogin:null},
    reducers:{
        signup(state, action){
         state.isLogin = action.payload;
        },

        logout(state){
        state.isLogin = null;
        }
    }
})

export const {logout, signup} = authSlice.actions;
export default authSlice.reducer;