
export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  features: string[];
  images: string[];
  brand: string;
  rating: number;
  stock: number;
}

export type ProductCategory = 'laptop' | 'smartphone' | 'watch' | 'headphone' | 'earbud';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export type PaymentMethod = 'card' | 'upi' | 'cod';

export interface CheckoutDetails {
  orderDetails: OrderDetails;
  paymentMethod: PaymentMethod;
}
