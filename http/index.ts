import axios from "axios";
import QueryString from "qs";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

// Categories

export const fetchCategories = async () => api.get("/api/categories");

//Articles

export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

export const fetchArticleBySlug = async (QueryString: string) =>
  api.get(`/api/articles?${QueryString}`);
