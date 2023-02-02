import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'tasks',
    initialState:[],
    // taskAdded and taskDeleted is actions
    reducers:{
        taskAdded:(state, action) =>{
            state.push({
                id:action.payload.id,
                description:action.payload.description,
                status:action.payload.status
            })
        },
        taskDeleted:(state, action)=>{
            return state.filter(item=>item.id !== action.payload.id)
        }
    }
})

export default slice.reducer;
export const { taskAdded, taskDeleted} = slice.actions
console.log(slice);