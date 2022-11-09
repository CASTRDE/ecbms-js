import axios from "axios";

const api = axios.create({
    baseURL: "https://6322c436362b0d4e7dd2cd67.mockapi.io/api/"
});

export function login(id){
    return api.get(`/todos/${id}`);
}