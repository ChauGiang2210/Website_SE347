import axios from "axios"
// router.get("/category/:category", productController.getAllProductsByCategory);
// router.get("/brand/:brand", productController.getAllProductsByBrand);
// router.get("/skin-type/:skinType", productController.getAllProductsBySkinType);
// router.get("/:id", productController.getProductById);
// router.get("/", productController.getAllProducts);
// router.post("/", authenticate, adminOnly, productController.addProduct);
// router.put("/:id", authenticate, adminOnly, productController.updateProduct);
// router.delete("/:id", authenticate, adminOnly, productController.deleteProduct);

export const getAllProducts = async (search) => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/`)
    return res.data
}

export const getProductById = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`)
    return res.data
}

export const addProduct = async (data) => {
    // console.log('data', data)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product`, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const updateProduct = async (id, data) => {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/product/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const deleteProduct = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/product/${id}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}
