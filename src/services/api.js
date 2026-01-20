import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchMovies = async (query, page = 1) => {
  const res = await axios.get(`${BASE_URL}/movies?q=${query}&page=${page}`);
  return res.data;
};

export const fetchBooks = async (query, page = 1) => {
  const res = await axios.get(`${BASE_URL}/books?q=${query}&page=${page}`);
  return res.data;
};
