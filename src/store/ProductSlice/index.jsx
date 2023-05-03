import { createSlice } from "@reduxjs/toolkit";
import products from "../../utils/products";

export const ProductSlice =  createSlice({
    name: 'product',
    initialState: {products: products},
    reducers:{
        add_to_card: (state,action)=>{
            console.log(state);
        }
    }
})
export const {add_to_card}= ProductSlice.actions
export default ProductSlice.reducer