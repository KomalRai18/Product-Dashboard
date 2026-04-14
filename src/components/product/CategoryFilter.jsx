import { useProductContext } from '../../context/ProductContext';
import { ALL_CATEGORIES } from '../../utils/constants';

const CategoryFilter = ({ categories = [] }) => {
  const { selectedCategory, setSelectedCategory } = useProductContext();

  if (categories.length === 0) return null;

  const allOptions = [ALL_CATEGORIES, ...categories];

  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="flex flex-wrap gap-2 mb-6"
    >
      {allOptions.map((cat) => {
        const isActive = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={isActive}
            className={[
              'px-4 py-1.5 rounded-full text-sm font-medium capitalize',
              'transition-all duration-200 whitespace-nowrap',
              isActive
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25 scale-[1.04]'
                : 'bg-slate-800/60 text-slate-400 border border-slate-700/60 hover:border-indigo-500/50 hover:text-slate-200 hover:bg-slate-700/60',
            ].join(' ')}
          >
            {cat === ALL_CATEGORIES ? '✦ All' : cat}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
