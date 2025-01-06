import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    price: 19.99,
    description: 'Light roasted Ethiopian coffee with floral and citrus notes',
    category: 'coffee',
    stock: 50,
    imageUrl: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    price: 18.99,
    description: 'Medium roast with caramel sweetness and nutty undertones',
    category: 'coffee',
    stock: 30,
    imageUrl: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Espresso Blend',
    price: 21.99,
    description: 'Dark roasted blend perfect for espresso drinks',
    category: 'coffee',
    stock: 25,
    imageUrl: '/placeholder.svg'
  }
];