import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import logo from '../assets/logo.png';

export default function Header({ onCartClick }) {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Clementine Crafts" className="h-24 w-24" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-clementine-500 font-medium transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-clementine-500 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-clementine-500 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="text-gray-700 hover:text-clementine-500 font-medium transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-cream-100 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-clementine-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4 flex space-x-6">
          <Link
            to="/"
            className="text-sm text-gray-700 hover:text-clementine-500 font-medium"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-sm text-gray-700 hover:text-clementine-500 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm text-gray-700 hover:text-clementine-500 font-medium"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="text-sm text-gray-700 hover:text-clementine-500 font-medium"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
