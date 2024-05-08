import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL
const maxImages = 100

const auth = {
    username: import.meta.env.VITE_API_KEY,
    password: import.meta.env.VITE_API_SECRET,
}

const instance = axios.create()

const data = new FormData()
data.append


export function getAllImages() {

    return axios.get(`${BASE_URL}?max_results=${maxImages}`, auth)
    .then((results) => {
        console.log(results.data, "-----axios results");
        return results.data
    })
    .catch((err) => {
        console.log("API error getting images:", err);
    })
}