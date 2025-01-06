import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { Coffee } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (product.stock > 0) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    } else {
      toast({
        title: "Out of stock",
        description: `${product.name} is currently out of stock.`,
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Coffee className="h-5 w-5" />
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${product.price}</span>
          <span className="text-sm text-gray-500">
            Stock: {product.stock}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full"
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};