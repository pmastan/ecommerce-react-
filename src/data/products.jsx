import product1 from "../assets/tv1.jpg";
import product2 from "../assets/tv2.jpeg";

export const initialProducts = [
  {
    id: 1,
    title: "Test Product",
    price: 100,
    description: "Sample description",
    category: "electronics",
    image: product1,   
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 2,
    title: "Test Product",
    price: 120,
    description: "Sample description",
    category: "electronics",
    image: product1,   
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 3,
    title: "Test Product",
    price: 150,
    description: "Sample description",
    category: "electronics",
    image: product1,   
    rating: { rate: 4.5, count: 120 }
  },
  {
    id: 4,
    title: "Test Product",
    price: 200,
    description: "Sample description",
    category: "electronics",
    image: product2,   
    rating: { rate: 4.5, count: 120 }
  }
];