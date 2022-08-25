import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../utils/queries";

//import categories from '../data/categories'

const CategoriesLinks = () => {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];

  return (
    <div>
      {categories.map((category) => (
        <div key={category.name} className="category-link p-5 m-3 border-b-2">
          <Link
            to={`/category/${category.name}`}
            className="text-gray-600 hover:font-bold"
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriesLinks;
