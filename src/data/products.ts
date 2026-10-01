export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Aero Edge Running Shoes",
    description: "Lightweight, durable running shoes for daily workouts.",
    price: 120,
    category: "Footwear",
    image: "/products/furniture_01.png",
  },
  {
    id: 2,
    name: "Velocity Vibe Mountain Bike",
    description: "High-performance mountain bike for off-road enthusiasts.",
    price: 850,
    category: "Outdoor",
    image: "/products/furniture_02.png",
  },
  {
    id: 3,
    name: "Pixel Playground Gaming Laptop",
    description: "Ultra-fast gaming laptop with high-refresh screen and RTX GPU.",
    price: 1600,
    category: "Electronics",
    image: "/products/furniture_03.png",
  },
  {
    id: 4,
    name: "BeachBliss Surfboard",
    description: "Perfect surfboard for both beginners and pros alike.",
    price: 450,
    category: "Sports",
    image: "/products/furniture_04.png",
  },
  {
    id: 5,
    name: "Enchanted Mist Perfume",
    description: "Long-lasting floral fragrance with soft undertones.",
    price: 75,
    category: "Beauty",
    image: "/products/furniture_05.png",
  },
  {
    id: 6,
    name: "Gadget Galaxy Smartwatch",
    description: "Fitness tracking, calls, and notifications on your wrist.",
    price: 199,
    category: "Electronics",
    image: "/products/furniture_06.png",
  },
  {
    id: 7,
    name: "Home Town Sofa Set",
    description: "Modern, comfortable 3-piece living room sofa set.",
    price: 950,
    category: "Furniture",
    image: "/products/furniture_07.png",
  },
  {
    id: 8,
    name: "ProActive Nutrition Whey Protein",
    description: "High-quality protein powder for muscle recovery.",
    price: 60,
    category: "Health",
    image: "/products/furniture_08.png",
  },
  {
    id: 9,
    name: "Watch Maven Chronograph",
    description: "Stylish chronograph wristwatch with leather strap.",
    price: 310,
    category: "Accessories",
    image: "/products/furniture_09.png",
  },
];
