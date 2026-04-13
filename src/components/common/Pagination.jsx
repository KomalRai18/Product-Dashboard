import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useProductContext } from '../../context/ProductContext';
import { getTotalPages, getPageNumbers } from '../../utils/helpers';

const Pagination = ({ totalItems = 0 }) => {
  const { currentPage, setCurrentPage, ITEMS_PER_PAGE } = useProductContext();
  const totalPages = getTotalPages(totalItems, ITEMS_PER_PAGE);

  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  const goTo = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <nav
      aria-label="Product pagination"
      className="flex items-center justify-center gap-1.5 mt-10 flex-wrap"
    >
      {/* Prev */}
      <button
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <FiChevronLeft className="w-4 h-4" />
      </button>

      {/* Page numbers */}
      {pages.map((page, idx) =>
        page === '...' ? (
          <span
            key={`ellipsis-${idx}`}
            className="w-9 h-9 flex items-center justify-center text-slate-600 text-sm select-none"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => goTo(page)}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
            className={[
              'w-9 h-9 rounded-xl text-sm font-medium transition-all duration-200',
              currentPage === page
                ? 'bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200',
            ].join(' ')}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <FiChevronRight className="w-4 h-4" />
      </button>

      {/* Page count label */}
      <span className="ml-3 text-xs text-slate-600">
        Page {currentPage} of {totalPages}
      </span>
    </nav>
  );
};

export default Pagination;
