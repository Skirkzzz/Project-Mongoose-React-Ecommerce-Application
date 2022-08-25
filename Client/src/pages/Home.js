// UI Components
<<<<<<< HEAD
import ProductCard from '../components/ProductCard'
import CategoriesLinks from '../components/CategoriesLinks'

import { useQuery } from '@apollo/client';
import { QUERY_FEATURED_PRODUCTS } from '../utils/queries';

// Shopping Cart
import { useCart } from '../context/CartContext'

const Home = () => {
  
  const { onAddToCart } = useCart()
=======
import ProductCard from "../components/ProductCard";
import CategoriesLinks from "../components/CategoriesLinks";

import { useQuery } from "@apollo/client";
import { QUERY_FEATURED_PRODUCTS } from "../utils/queries";

// Shopping Cart
import { useCart } from "../context/CartContext";

const Home = () => {
  const { onAddToCart } = useCart();
>>>>>>> 19e334c63348ac78c31a3c3f52c70161751dafdf

  const { loading, data } = useQuery(QUERY_FEATURED_PRODUCTS);
  const products = data?.products || [];

  return (
    <>
<<<<<<< HEAD
      <div className='w-75 border m-2 p-5'>
        <div className='section-title'>
          {products.map(product => (
            <ProductCard key={product.title} {...product} onAddToCart={()=>onAddToCart(product)} />
          ))}
        </div>
      </div>  
      <div className='w-25 border m-2 p-5'>
        <div className='section-title'>
            Browse Your Collections
=======
      <div className="w-75 m-2 p-5">
        <div className="section-title">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      </div>
      <div className="border-l-2 border-gray-400 w-25 m-2 p-5">
        <div className="section-title text-4xl font-bold underline underline-offset-8 decoration-gray-700 mb-4">
          Browse the Shop
>>>>>>> 19e334c63348ac78c31a3c3f52c70161751dafdf
        </div>
        <CategoriesLinks />
      </div>
    </>
<<<<<<< HEAD
  )
}

export default Home
=======
  );
};

export default Home;
>>>>>>> 19e334c63348ac78c31a3c3f52c70161751dafdf
