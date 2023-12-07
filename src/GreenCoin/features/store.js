import { configureStore } from '@reduxjs/toolkit'
import {cartReducer} from '../features/Cart'
import AuthReducers from '../GreenPointAdmin/Features/AuthUser'

export const store = configureStore({
  reducer:{
    cart: cartReducer,
    auth: AuthReducers
  }
})