import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    access_token: '',
  },
  reducers: {
    updateUser: (state, action) => {
        console.log(action.payload);
        state.username = action.payload.username
        state.email = action.payload.email
        state.access_token = action.payload.access_token
        },
    }
  }
)

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions

export default userSlice.reducer