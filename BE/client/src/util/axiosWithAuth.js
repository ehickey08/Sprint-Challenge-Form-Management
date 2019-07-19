import axios from 'axios'

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token.substring(1, token.length-1)}`,
        }
    });
};