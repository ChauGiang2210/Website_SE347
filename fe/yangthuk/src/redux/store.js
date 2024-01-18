import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slides/userSlide'

export default configureStore({
  reducer: {
    user: userReducer
  }
})