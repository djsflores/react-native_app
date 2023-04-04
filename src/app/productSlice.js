import { createSlice } from '@reduxjs/toolkit'

// const initialState = ['inicio']

export const productSlice = createSlice({
  name: 'products',
  initialState : [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    // deleteProduct: (state) => {
    //   state.value -= 1
    // }
  },
})

export const { addProduct } = productSlice.actions

export default productSlice.reducer