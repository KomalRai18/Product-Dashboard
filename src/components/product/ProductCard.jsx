import toast from 'react-hot-toast';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { formatPrice, truncateText } from '../../utils/helpers';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
  const { title, image, price, category, rating } = product;

  const handleAddToCart = () => {
    toast.success(`Added to cart!`, {
      description: truncateText(title, 35),
      icon: '🛒',
      style: {
        background: '#1e293b',
        color: '#f1f5f9',
        border: '1px solid rgba(99,102,241,0.25)',
        fontSize: '14px',
      },
    });
  };

  /* Star fill percentage */
  const starPercent = Math.round((rating.rate / 5) * 100);

  return (
    <article className="product-card group flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/40 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10">

      {/* Image area */}
      <div className="relative bg-white h-52 flex items-center justify-center p-5 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category badge */}
        <span className="absolute top-2.5 left-2.5 bg-indigo-600/90 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full capitalize tracking-wide backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2.5">
        {/* Title */}
        <h3 className="text-slate-200 text-sm font-medium leading-snug line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          {/* Visual star bar */}
          <div className="relative w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-amber-400 rounded-full"
              style={{ width: `${starPercent}%` }}
            />
          </div>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <FiStar className="w-3 h-3 fill-amber-400 text-amber-400" />
            {rating.rate}
            <span className="text-slate-600">({rating.count})</span>
          </span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto pt-1 flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-indigo-400">
            {formatPrice(price)}
          </span>
          <Button id={`add-to-cart-${product.id}`} onClick={handleAddToCart} size="sm">
            <FiShoppingCart className="w-3.5 h-3.5" />
            Add
          </Button>
        </div>
      </div>

    </article>
  );
};

export default ProductCard;
