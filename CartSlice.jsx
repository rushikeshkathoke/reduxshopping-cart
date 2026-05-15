import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addToCart : (state , action)=>{

            const product = action.payload;

            let existingProduct = state.items.find((item)=>product.id==item.id);

            if(existingProduct)
            {
                existingProduct.quantity = existingProduct.quantity + 1;
            }
            else
            {
                state.items.push({...product, quantity:1})
            }
        },
        removeFromCart : (state, action)=>{
           state.items =  state.items.filter((item)=>item.id!=action.payload)
        },
        incQty : (state,action)=>{
        const item = state.items.find((item)=>item.id===action.payload)
        if(item)
        {
            item.quantity = item.quantity + 1;
        }
        },

        decQty : (state,action)=>{
        const item = state.items.find((item)=>item.id===action.payload)
       if(item && item.quantity >1)
       {
        item.quantity = item.quantity -1;
       }
       else
       {
         state.items =  state.items.filter((cartitem)=>cartitem.id!=action.payload)
       }
        },

        clearCart : (state)=>{
            state.items = []
             
        }
    }
})

export let {addToCart,removeFromCart,incQty,decQty,clearCart} = CartSlice.actions;
export default CartSlice.reducer;