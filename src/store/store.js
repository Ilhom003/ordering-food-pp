import { configureStore } from "@reduxjs/toolkit"
import products from './ProductSlice'

export const store = configureStore({
    reducer:{
        products
    }
})