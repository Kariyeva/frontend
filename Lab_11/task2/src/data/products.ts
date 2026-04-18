export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const PLACEHOLDER = 'https://via.placeholder.com/100';

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description:
      'Noise-cancelling over-ear headphones with long battery life and premium sound.',
    price: 199.99,
    category: 'Electronics',
    image: PLACEHOLDER,
  },
  {
    id: 2,
    name: 'Smart Watch',
    description:
      'Track workouts, heart rate, and notifications with a bright always-on display.',
    price: 299.99,
    category: 'Electronics',
    image: PLACEHOLDER,
  },
  {
    id: 3,
    name: 'Running Shoes',
    description:
      'Lightweight cushioned shoes designed for daily training and race day comfort.',
    price: 129.99,
    category: 'Sports',
    image: PLACEHOLDER,
  },
  {
    id: 4,
    name: 'Coffee Maker',
    description:
      'Programmable drip coffee maker with thermal carafe to keep coffee hot for hours.',
    price: 79.99,
    category: 'Home',
    image: PLACEHOLDER,
  },
  {
    id: 5,
    name: 'Laptop Stand',
    description:
      'Adjustable aluminum stand to improve posture and airflow for your laptop.',
    price: 49.99,
    category: 'Office',
    image: PLACEHOLDER,
  },
];
