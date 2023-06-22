import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:"",
    users:[],
    resumeData:[],
}

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser : (state,action)=>{
            state.user=action.payload;
            const foundItem = state.users.find((user) => user.number === action.payload);
            if(!foundItem) {state.users.push({id:Date.now(),number:action.payload})}
        },

        addResume : (state,action)=>{
            console.log("actions",action.payload);
            const data = action.payload;
            data["userId"] = state.user;
            data["id"] = Date.now();
            state.resumeData.push(data)
        },

        deleteResume : (state,action)=>{
            state.resumeData = state.resumeData.filter((item) => item.id !== action.payload);
        },

        logOut : (state)=>{
            state.user = "";
        }
    }
});

export const {addUser,logOut,addResume,deleteResume} = usersSlice.actions;

export default usersSlice.reducer;