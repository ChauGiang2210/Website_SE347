import axios from 'axios';

export const login = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data, {
        credentials: 'include',
    });
    return res.data;
}

export const logout = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/logout`, {}, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const register = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, data);
    return res.data;
}

export const getDetailUser = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const updateUser = async (id, data) => {
    // console.log(data);
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/user/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const getAllUser = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

export const deleteUser = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/user/${id}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token").split('"').join('')}`,
        },
    });
    return res.data;
}

