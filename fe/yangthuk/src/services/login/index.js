import axios from 'axios';

export const login = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data);
    // console.log(res.data);
    return res.data;

}
