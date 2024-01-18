import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    username: '',
    email: '',
    password: '',
    favorite: [],
    role: 'user',
    access_token: '',
  },
  reducers: {
    updateUser: (state, action) => {
        // console.log(action.payload);
        state.id = action.payload._id
        state.username = action.payload.username
        state.email = action.payload.email
        state.password = action.payload.password
        state.favorite = action.payload.favorite
        state.role = action.payload.role
        state.access_token = action.payload.access_token
        },
        resetUser: (state) => {
          // console.log(action.payload);
          state.id = ''
          state.username = ''
          state.email = ''
          state.password = ''
          state.favorite = []
          state.role = 'user'
          state.access_token = ''
          },
    }
  }
)

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer