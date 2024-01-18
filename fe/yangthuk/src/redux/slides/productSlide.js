import { createSlice } from "@reduxjs/toolkit";

// export const productSlice = createSlice({
//     name: "product",
//     initialState: {
//         id: '',
//         name: '',
//         description: '',
//         price: 0,
//         category: '',
//         brand: '',
//         skinType: '',
//         countInStock: 0,
//         rating: 0,
//         image: '',
//         // numReviews: 0,
//         // isFavorite: false,
//         // isAddToCart: false,
//     },
//     reducers: {
//         updateProduct: (state, action) => {
//             // console.log(action.payload);
//             state.id = action.payload._id
//             state.name = action.payload.name
//             state.image = action.payload.image
//             state.description = action.payload.description
//             state.brand = action.payload.brand
//             state.category = action.payload.category
//             state.price = action.payload.price
//             state.countInStock = action.payload.countInStock
//             state.rating = action.payload.rating
//             // state.numReviews = action.payload.numReviews
//             // state.isFavorite = action.payload.isFavorite
//             // state.isAddToCart = action.payload.isAddToCart
//         },
//         resetProduct: (state) => {
//             // console.log(action.payload);
//             state.id = ''
//             state.name = ''
//             state.image = ''
//             state.description = ''
//             state.brand = ''
//             state.category = ''
//             state.price = 0
//             state.countInStock = 0
//             state.rating = 0
//             // state.numReviews = 0
//             // state.isFavorite = false
//             // state.isAddToCart = false
//         },
//     }
// })

// // Action creators are generated for each case reducer function
// export const { updateProduct, resetProduct } = productSlice.actions

// export default productSlice.reducer

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    // search: ''
    id: '',
    name: '',
    image: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
    countInStock: 0,
    rating: 0,
    skinType: '',
  },
  reducers: {
    // searchProduct: (state, action) => {
    //   state.search = action.payload
    // },
    updateProduct: (state, action) => {
      // console.log(action.payload);
      state.id = action.payload._id
      state.name = action.payload.name
      state.image = action.payload.imageUrl
      state.description = action.payload.description
      state.brand = action.payload.brand
      state.category = action.payload.category
      state.skinType = action.payload.skinType
      state.price = action.payload.price
      state.countInStock = action.payload.countInStock
      state.rating = action.payload.rating
    },
    resetProduct: (state) => {
      // console.log(action.payload);
      state.id = ''
      state.name = ''
      state.image = ''
      state.description = ''
      state.brand = ''
      state.category = ''
      state.skinType = ''
      state.price = 0
      state.countInStock = 0
      state.rating = 0
    },

  }
})

// Action creators are generated for each case reducer function
export const { updateProduct, resetProduct } = productSlice.actions

export default productSlice.reducer