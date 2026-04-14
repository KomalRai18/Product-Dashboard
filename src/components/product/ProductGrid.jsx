import { FiPackage } from 'react-icons/fi';
import ProductCard from './ProductCard';
import Button from '../ui/Button';

const EmptyState = ({ onReset }) => (
  <div className="flex flex-col items-center justify-center py-24 gap-4 text-center col-span-full">
    <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
      <FiPackage className="w-9 h-9 text-slate-600" />
    </div>
    <div className="space-y-1">
      <h3 className="text-lg font-semibold text-slate-300">No products found</h3>
      <p className="text-slate-600 text-sm">Try adjusting your search term or filters.</p>
    </div>
    {onReset && (
      <Button variant="ghost" onClick={onReset}>
        Clear all filters
      </Button>
    )}
  </div>
);

const ProductGrid = ({ products = [], onReset }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {products.length === 0 ? (
      <EmptyState onReset={onReset} />
    ) : (
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    )}
  </div>
);

export default ProductGrid;
