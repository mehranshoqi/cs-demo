// src/lib/types.ts

export interface Product {
  id: string;
  name: string;
  image: string; // URL to the image
  wear: string;
  float: number;
  price: number;
  discount?: number; // Optional discount percentage
  rarityColor?: string; // e.g., 'red', 'blue', 'purple' for the line under name
}

export interface CartItem extends Product {
  quantity: number;
  // Potentially other cart-specific properties like selected attributes
}