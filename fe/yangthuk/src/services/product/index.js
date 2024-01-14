import axios from "axios"

export const getAllProducts = async (search) => {
    let res = {}
    res = await axios.get(`${process.env.REACT_APP_API_URL}/product/`)
    return res.data
}