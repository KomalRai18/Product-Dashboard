import { ALL_CATEGORIES } from './constants';

/**
 * Filter products by search term and selected category.
 */
export const filterProducts = (products = [], searchTerm = '', category = ALL_CATEGORIES) => {
  const term = searchTerm.trim().toLowerCase();

  return products.filter((p) => {
    const matchesSearch = !term || p.title.toLowerCase().includes(term);
    const matchesCategory =
      category === ALL_CATEGORIES || p.category === category;
    return matchesSearch && matchesCategory;
  });
};

/**
 * Sort an array of products by the given sort key.
 */
export const sortProducts = (products = [], sortBy = 'default') => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    default:
      return sorted;
  }
};

/**
 * Slice a flat array into a single page.
 */
export const paginateProducts = (products = [], page = 1, perPage = 8) => {
  const start = (page - 1) * perPage;
  return products.slice(start, start + perPage);
};

/**
 * Calculate the total number of pages.
 */
export const getTotalPages = (totalItems = 0, perPage = 8) =>
  Math.ceil(totalItems / perPage);

/**
 * Format a number as a USD price string.
 */
export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

/**
 * Truncate text to a given character limit.
 */
export const truncateText = (text = '', maxLength = 50) =>
  text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;

/**
 * Build a compact list of page numbers (with '...' gaps) for the pagination UI.
 */
export const getPageNumbers = (currentPage, totalPages) => {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

  if (currentPage <= 4)
    return [1, 2, 3, 4, 5, '...', totalPages];

  if (currentPage >= totalPages - 3)
    return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];

  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};
