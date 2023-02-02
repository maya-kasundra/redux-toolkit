import { configureStore } from '@reduxjs/toolkit'
import reducer from './combineRed'

export default function(){
    return configureStore({reducer})
}   