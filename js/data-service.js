import axios from "axios";

export const getFoods = () => {
    return axios.get('http://127.0.0.1:8000/api/foods')
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
}