import axios from "axios";

// router.get("/", authenticate, addressController.getAllAddresss);
// router.post("/", authenticate, addressController.addAddress);
// router.put("/:id", authenticate, addressController.updateAddress);
// router.delete("/:id", authenticate, addressController.deleteAddress);

export const getAllAddresss = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/address/`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    console.log(res.data);
    return res.data
}

export const getAllAddresssByUser = async (user) => {
    // console.log(`${process.env.REACT_APP_API_URL}/address/user/${user}`);
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/address/user/${user}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data
}

export const addAddress = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/address`, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const updateAddress = async (id, data) => {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/address/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const deleteAddress = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/address/${id}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}