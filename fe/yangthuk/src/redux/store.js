import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slides/userSlide'
import productReducer from './slides/productSlide'
import orderReducer from './slides/orderSlide'

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    order: orderReducer,
  }
})