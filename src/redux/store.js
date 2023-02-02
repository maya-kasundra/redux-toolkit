import { configureStore } from '@reduxjs/toolkit'
import reducer from './task'

export default function(){
    return configureStore({reducer})
}