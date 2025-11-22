import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import logo from '../assets/logo.png';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tote Bags', 'Accessories'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-peach-50 to-cream-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src={logo}
            alt="Clementine Crafts"
            className="h-48 w-48 md:h-64 md:w-64 mx-auto mb-8"
          />
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Handcrafted with Love
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover unique tote bags and accessories, each piece carefully made by hand.
            Perfect for everyday adventures or thoughtful gifts.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-clementine-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-cream-200 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
