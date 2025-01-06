import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm mb-8">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-6 w-6" />
            <span className="text-xl font-bold">Brewverse</span>
          </Link>
          <div className="space-x-4">
            <Link to="/signup">
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link to="/cart">
              <Button>Cart</Button>
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Brewverse</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee beans from around the world.
            Each batch is freshly roasted to perfection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;