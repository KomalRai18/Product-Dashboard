import { FiSearch, FiX } from 'react-icons/fi';
import { useProductContext } from '../../context/ProductContext';
import Input from '../ui/Input';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useProductContext();

  const clearButton = searchTerm ? (
    <button
      onClick={() => setSearchTerm('')}
      aria-label="Clear search"
      className="text-slate-500 hover:text-slate-300 transition-colors p-0.5"
    >
      <FiX className="w-4 h-4" />
    </button>
  ) : null;

  return (
    <Input
      id="product-search"
      placeholder="Search products by name…"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      icon={<FiSearch className="w-4 h-4" />}
      rightElement={clearButton}
      autoComplete="off"
    />
  );
};

export default SearchBar;
