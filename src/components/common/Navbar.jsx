import { Link } from 'react-router-dom';
import { FiShoppingBag, FiZap, FiUserPlus } from 'react-icons/fi';
import Button from '../ui/Button';

const Navbar = ({ totalProducts = 0 }) => (
  <header className="sticky top-0 z-50 bg-slate-900/75 backdrop-blur-2xl border-b border-slate-800/80">
    <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

      {/* Brand */}
      <Link to="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <FiShoppingBag className="w-4.5 h-4.5 text-white" />
        </div>
        <span className="text-lg font-bold gradient-text tracking-tight">
          ProductHub
        </span>
      </Link>

      {/* Navigation & Stats */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-sm text-slate-400">
          <FiZap className="w-4 h-4 text-indigo-400" />
          {totalProducts > 0 ? (
            <span>
              <span className="text-indigo-400 font-semibold">{totalProducts}</span>
              {' '}products loaded
            </span>
          ) : (
            <span className="text-slate-600">Loading…</span>
          )}
        </div>

        <div className="h-4 w-[1px] bg-slate-800 hidden md:block"></div>

        <Link to="/register">
          <Button variant="secondary" size="sm" className="gap-2">
            <FiUserPlus className="w-3.5 h-3.5" />
            Sign Up
          </Button>
        </Link>
      </div>

    </div>
  </header>
);

export default Navbar;

