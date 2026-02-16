import product1 from "../Images/tv1.jpg";
import product2 from "../Images/tv2.jpeg";

export const initialProducts = [
  {
    id: 1,
    title: "Test Product",
    price: 100,
    description: "Sample description",
    category: "electronics",
    image: product1,   // ✅ USE IMPORTED VARIABLE
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Test Product",
    price: 120,
    description: "Sample description",
    category: "electronics",
    image: product1,   // ✅ USE IMPORTED VARIABLE
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 3,
    title: "Test Product",
    price: 150,
    description: "Sample description",
    category: "electronics",
    image: product1,   // ✅ USE IMPORTED VARIABLE
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 4,
    title: "Test Product",
    price: 200,
    description: "Sample description",
    category: "electronics",
    image: product2,   // ✅ USE IMPORTED VARIABLE
    rating: { rate: 4.5, count: 120 }
  }
];