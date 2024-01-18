import axios from "axios";

// router.get('/user/:user', authenticate, orderController.getAllOrdersByUser);
// router.get('/:id', authenticate, orderController.getOrderById);
// router.get('/', authenticate, adminOnly, orderController.getAllOrders);
// router.post('/', authenticate, orderController.addOrder);
// router.put('/:id', authenticate, adminOnly, orderController.updateOrder);
// router.delete('/:id', authenticate, adminOnly, orderController.deleteOrder);

export const getAllOrders = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/order/`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data
}

export const getOrderById = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/order/${id}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data
}

export const getAllOrdersByUser = async (user) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/order/user/${user}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data
}

export const addOrder = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/order`, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const updateOrder = async (id, data) => {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/order/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const deleteOrder = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/order/${id}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}