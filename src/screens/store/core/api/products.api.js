import axios from "axios";

const api = axios.create({ baseURL: "https://ec-qbo.herokuapp.com/" });

export async function getProducts() {
  const { data } = await api.get("/products");

  return data;
}