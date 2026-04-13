import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategories } from '../services/api';

/**
 * Fetches and caches all products from FakeStoreAPI.
 * Data is treated as fresh for 5 minutes so navigating
 * back to the dashboard doesn't trigger a new network request.
 */
export const useProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts().then((res) => res.data),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

/**
 * Fetches and caches the list of product categories.
 * Categories rarely change so we cache them for 10 minutes.
 */
export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories().then((res) => res.data),
    staleTime: 10 * 60 * 1000,
    retry: 2,
  });
