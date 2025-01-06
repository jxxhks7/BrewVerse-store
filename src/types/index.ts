export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'coffee-beans' | 'coffee-makers' | 'teas' | 'brewing-accessories' | 'mugs-cups' | 'home-decor' | 'apparel';
  stock: number;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  user: User | null;
  error: Error | null;
}