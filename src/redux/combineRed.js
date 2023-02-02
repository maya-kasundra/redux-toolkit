import { combineReducers } from "redux";
import taskReducer from './task'
import cartReducer from './carts'

combineReducers({
    taskReducer, cartReducer
})