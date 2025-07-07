// lib/products.ts

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with long battery life.",
    price: 149.99,
    category: "Electronics",
    image: "/images/products/headphones.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    description: "Mechanical keyboard with RGB backlight and macro support.",
    price: 89.99,
    category: "Electronics",
    image: "/images/products/keyboard.jpg",
    inStock: true,
  },
  {
    id: 3,
    name: "Office Chair",
    description: "Ergonomic chair with lumbar support and adjustable height.",
    price: 199.0,
    category: "Furniture",
    image: "/images/products/chair.jpg",
    inStock: false,
  },
  {
    id: 4,
    name: "Water Bottle",
    description: "Eco-friendly stainless steel bottle (1L).",
    price: 19.95,
    category: "Accessories",
    image: "/images/products/bottle.jpg",
    inStock: true,
  },
  {
    id: 5,
    name: "Smart Watch",
    description: "Fitness-focused smart watch with heart-rate monitor.",
    price: 129.5,
    category: "Wearables",
    image: "/images/products/watch.jpg",
    inStock: true,
  },
];
