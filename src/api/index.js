import axios from "axios";

export const api = axios.create({ baseURL: "https://ec-qbo.herokuapp.com/" });