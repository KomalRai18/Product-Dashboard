import { createContext, useContext, useState, useCallback } from 'react';
import { ITEMS_PER_PAGE, ALL_CATEGORIES } from '../utils/constants';

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [searchTerm, setSearchTermRaw]       = useState('');
  const [sortBy, setSortByRaw]               = useState('default');
  const [selectedCategory, setCategoryRaw]   = useState(ALL_CATEGORIES);
  const [currentPage, setCurrentPage]        = useState(1);

  /* Reset page to 1 whenever a filter changes */
  const setSearchTerm = useCallback((val) => {
    setSearchTermRaw(val);
    setCurrentPage(1);
  }, []);

  const setSortBy = useCallback((val) => {
    setSortByRaw(val);
    setCurrentPage(1);
  }, []);

  const setSelectedCategory = useCallback((val) => {
    setCategoryRaw(val);
    setCurrentPage(1);
  }, []);

  const resetFilters = useCallback(() => {
    setSearchTermRaw('');
    setSortByRaw('default');
    setCategoryRaw(ALL_CATEGORIES);
    setCurrentPage(1);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        searchTerm,      setSearchTerm,
        sortBy,          setSortBy,
        selectedCategory, setSelectedCategory,
        currentPage,     setCurrentPage,
        resetFilters,
        ITEMS_PER_PAGE,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error('useProductContext must be used within <ProductProvider>');
  return ctx;
};
