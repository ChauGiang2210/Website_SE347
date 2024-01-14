import axios from "axios";

export const getDetailUser = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    return res.data;
}