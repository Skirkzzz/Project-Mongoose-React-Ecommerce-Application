// UI Components
<<<<<<< HEAD
import ProductCard from '../components/ProductCard'
import CategoriesLinks from '../components/CategoriesLinks'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_CATEGORY } from '../utils/queries';

// Shopping Cart
import { useCart } from '../context/CartContext'

const ProductList = () => {
  
  const { onAddToCart } = useCart()

  const { category } = useParams();

  console.log(`ProductList: category = ${category}`)
=======
import ProductCard from "../components/ProductCard";
import CategoriesLinks from "../components/CategoriesLinks";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_CATEGORY } from "../utils/queries";

// Shopping Cart
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { onAddToCart } = useCart();

  const { category } = useParams();

  console.log(`ProductList: category = ${category}`);
>>>>>>> 19e334c63348ac78c31a3c3f52c70161751dafdf

  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, {
    // pass URL parameter
    variables: { name: category },
  });

  const products = data?.category.products || [];
<<<<<<< HEAD
  const categoryName = data?.category.name || 'Loading Products...';
  console.log(`ProductList: products = ${products}`)

  return (
    <>
      <div className='w-75 border m-2 p-5'>
        <h1>All {categoryName}</h1>
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
  const categoryName = data?.category.name || "Loading Products...";
  console.log(`ProductList: products = ${products}`);

  return (
    <>
      <div className="w-75 m-2 p-5">
        <h1>All {categoryName}</h1>
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
      <div className="border-l-2 w-25 m-2 p-5">
        <div className="section-title underline underline-offset-8 decoration-gray-700">
          Browse the Shop
>>>>>>> 19e334c63348ac78c31a3c3f52c70161751dafdf
        </div>
        <CategoriesLinks />
      </div>
    </>
<<<<<<< HEAD
  )
}

export default ProductList
=======
  );
};

export default ProductList;
>>>>>>> 19e334c63348ac78c31a3c3f52c70161751dafdf
