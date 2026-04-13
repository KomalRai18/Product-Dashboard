import { FiChevronDown } from 'react-icons/fi';
import { useProductContext } from '../../context/ProductContext';
import { SORT_OPTIONS } from '../../utils/constants';

const SortDropdown = () => {
  const { sortBy, setSortBy } = useProductContext();

  return (
    <div className="relative">
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="
          w-full appearance-none cursor-pointer
          bg-slate-800/70 border border-slate-700/70 rounded-xl
          px-4 py-2.5 pr-9 text-sm text-slate-200
          focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
          transition-all duration-200
        "
      >
        {SORT_OPTIONS.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* Custom chevron — appearance-none removes the native one */}
      <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
    </div>
  );
};

export default SortDropdown;
