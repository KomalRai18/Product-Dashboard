import React, { useMemo } from 'react';
import { useProductContext } from '../../context/ProductContext';
import { useProducts, useCategories } from '../../hooks/useProducts';
import useDebounce from '../../hooks/useDebounce';
import { filterProducts, sortProducts, paginateProducts } from '../../utils/helpers';
import { dashboardStyles as s } from './dashboard.styles';

import Navbar from '../../components/common/Navbar';
import ErrorState from '../../components/common/ErrorState';
import Pagination from '../../components/common/Pagination';
import SearchBar from '../../components/product/SearchBar';
import SortDropdown from '../../components/product/SortDropdown';
import CategoryFilter from '../../components/product/CategoryFilter';
import ProductGrid from '../../components/product/ProductGrid';
import { SkeletonGrid } from '../../components/ui/Loader';

const Dashboard = () => {
  const {
    searchTerm,
    sortBy,
    selectedCategory,
    currentPage,
    resetFilters,
    ITEMS_PER_PAGE,
  } = useProductContext();

  const {
    data: products = [],
    isLoading: productsLoading,
    isError: productsError,
    error: productErrorObj,
    refetch,
  } = useProducts();

  const { data: categories = [] } = useCategories();

  // Debounce search term to prevent filtering on every keystroke
  const debouncedSearch = useDebounce(searchTerm, 400);

  // 1. Filter & Sort logic (Memoized)
  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];
    
    let result = filterProducts(products, debouncedSearch, selectedCategory);
    result = sortProducts(result, sortBy);
    
    return result;
  }, [products, debouncedSearch, selectedCategory, sortBy]);

  // 2. Pagination logic
  const paginatedProducts = useMemo(() => {
    return paginateProducts(filteredAndSortedProducts, currentPage, ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage, ITEMS_PER_PAGE]);

  return (
    <div className="min-h-screen">
      <Navbar totalProducts={products.length} />

      <main className={s.container}>
        {/* Header: Title + Search/Sort */}
        <header className={s.header}>
          <div className="space-y-1">
            <p className="text-indigo-400 text-sm font-medium tracking-wide uppercase">Discover</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Premium Collection
            </h1>
          </div>

          <div className={s.controls}>
            <div className={s.searchWrapper}>
              <SearchBar />
            </div>
            <div className={s.sortWrapper}>
              <SortDropdown />
            </div>
          </div>
        </header>

        {/* Categories */}
        <CategoryFilter categories={categories} />

        {/* Main Content Area */}
        <section>
          {productsError ? (
            <ErrorState message={productErrorObj?.message} onRetry={refetch} />
          ) : productsLoading ? (
            <SkeletonGrid count={ITEMS_PER_PAGE} />
          ) : (
            <>
              <div className={s.resultsInfo}>
                <p className={s.countText}>
                  Showing <span className="text-slate-200">{filteredAndSortedProducts.length}</span> products
                </p>
              </div>

              <ProductGrid 
                products={paginatedProducts} 
                onReset={resetFilters} 
              />

              <Pagination totalItems={filteredAndSortedProducts.length} />
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
