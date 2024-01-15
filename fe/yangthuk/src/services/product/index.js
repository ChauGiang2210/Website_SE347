import axios from "axios"

export const getAllProducts = async (search) => {
    let res = {}
    res = await axios.get(`${process.env.REACT_APP_API_URL}/product/`)
    return res.data
}

export const getProductById = async (id) => {
    let res = {}
    res = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`)
    return res.data
}

export const addProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product`, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return res.data;
}