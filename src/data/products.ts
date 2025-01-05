import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'Essential cotton t-shirt for everyday wear',
    category: 'men',
    stock: 50,
    imageUrl: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Summer Floral Dress',
    price: 79.99,
    description: 'Light and breezy floral print dress',
    category: 'women',
    stock: 30,
    imageUrl: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Kids Denim Overalls',
    price: 45.99,
    description: 'Comfortable and durable denim overalls',
    category: 'kids',
    stock: 25,
    imageUrl: '/placeholder.svg'
  }
];