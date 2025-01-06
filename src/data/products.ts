import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    price: 19.99,
    description: 'Light roasted Ethiopian coffee with floral and citrus notes',
    category: 'coffee',
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=500'
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    price: 18.99,
    description: 'Medium roast with caramel sweetness and nutty undertones',
    category: 'coffee',
    stock: 30,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500'
  },
  {
    id: '3',
    name: 'Espresso Blend',
    price: 21.99,
    description: 'Dark roasted blend perfect for espresso drinks',
    category: 'coffee',
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1511537190424-bbbab1bb7c9d?w=500'
  }
];