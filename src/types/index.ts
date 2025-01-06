export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'men' | 'women' | 'kids' | 'coffee';
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