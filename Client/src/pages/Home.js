// UI Components
import ProductCard from "../components/ProductCard";
import CategoriesLinks from "../components/CategoriesLinks";

import { useQuery } from "@apollo/client";
import { QUERY_FEATURED_PRODUCTS } from "../utils/queries";

// Shopping Cart
import { useCart } from "../context/CartContext";

const Home = () => {
  const { onAddToCart } = useCart();

  const { loading, data } = useQuery(QUERY_FEATURED_PRODUCTS);
  const products = data?.products || [];

  return (
    <>
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
        </div>
        <CategoriesLinks />
      </div>
    </>
  );
};

export default Home;
