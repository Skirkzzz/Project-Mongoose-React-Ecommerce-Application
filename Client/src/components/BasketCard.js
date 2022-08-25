import { Link } from "react-router-dom";

const BasketCard = (props) => {
  const { title, description, image, price, _id, onRemoveFromCart } = props;

  return (
    <div className="p-6 m-2 flex flex-row drop-shadow-2xl border-b-2 mb-4 border-gray-400 ">
      <div>
        <img
          src={`/assets/${image}`}
          alt={title}
          className="product-image rounded-xl"
        />
      </div>
      <div className="product-details ml-4 flex flex-col justify-center">
        <Link
          to={`/product/${_id}`}
          className="text-3xl font-medium text-center"
        >
          {title}
        </Link>
        <div className="product-description">
          <p className="text-sm">{description}</p>
        </div>
        <div className="product-price flex justify-between">
          <p className="text-lg mr-5 font-bold">£{price}</p>
          <button
            className="bg-gray-700 px-4 py-2 rounded-xl text-gray-200 text-base"
            onClick={onRemoveFromCart}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
