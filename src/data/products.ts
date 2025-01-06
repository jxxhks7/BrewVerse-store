import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    price: 19.99,
    description: 'Light roasted Ethiopian coffee with floral and citrus notes',
    category: 'coffee-beans',
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=500'
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    price: 18.99,
    description: 'Medium roast with caramel sweetness and nutty undertones',
    category: 'coffee-beans',
    stock: 30,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500'
  },
  {
    id: '3',
    name: 'Professional Coffee Maker',
    price: 299.99,
    description: 'High-end automatic coffee maker with temperature control',
    category: 'coffee-makers',
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500'
  },
  {
    id: '4',
    name: 'Ceramic Pour-Over Set',
    price: 45.99,
    description: 'Handcrafted ceramic pour-over coffee maker with filter',
    category: 'brewing-accessories',
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500'
  },
  {
    id: '5',
    name: 'Artisan Coffee Mug',
    price: 24.99,
    description: 'Hand-painted ceramic coffee mug',
    category: 'mugs-cups',
    stock: 40,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500'
  },
  {
    id: '6',
    name: 'Premium Green Tea',
    price: 29.99,
    description: 'Organic Japanese green tea leaves',
    category: 'teas',
    stock: 35,
    imageUrl: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500'
  }
];