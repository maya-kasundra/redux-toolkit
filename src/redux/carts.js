import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'cart',
    initialState:[],
    // taskAdded and taskDeleted is actions
    reducers:{
        addToCart:(state, action) =>{
            state.push({
                id:action.payload.id,
                name:action.payload.name
                
            })
        },
        removeFromCart:(state, action)=>{
            return state.filter(item=>item.id !== action.payload.id)
        }
    }
})

export default slice.reducer;
export const { addToCart, removeFromCart} = slice.actions
console.log(slice);