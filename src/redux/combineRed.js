import { combineReducers } from "redux";
import taskReducer from './task'
import cartReducer from './carts'

export default  combineReducers({
    task:taskReducer,
    cart: cartReducer
})