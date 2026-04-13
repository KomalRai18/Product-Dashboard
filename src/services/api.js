import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

/* ─── Axios instance ─────────────────────────────────────────── */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

/* ─── Response interceptor ───────────────────────────────────── */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred';
    return Promise.reject(new Error(message));
  }
);

/* ─── API calls ──────────────────────────────────────────────── */
export const fetchProducts = () =>
  apiClient.get('/products');

export const fetchCategories = () =>
  apiClient.get('/products/categories');

export const fetchProductsByCategory = (category) =>
  apiClient.get(`/products/category/${category}`);

export const fetchProductById = (id) =>
  apiClient.get(`/products/${id}`);

export default apiClient;
