import { Link } from "react-router-dom";

const CheckoutLinks = ({ total }) => {
  return (
    <div>
      <div className="category-link p-5 m-3">
        {total > 0 ? (
          <span className="font-lg font-bold text-gray-700">
            Total: £{total}
          </span>
        ) : (
          <span className="font-lg text-gray-500">Your cart is empty</span>
        )}
      </div>
      <div className="rounded-lg px-4 py-2 bg-gray-700 text-gray-200 text-base text-center mb-4">
        <Link to="/checkout">Checkout</Link>
      </div>
      <div className="text-base text-center border-2 border-gray-700 rounded-lg px-4 py-2 text-gray-700">
        <Link to="/">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default CheckoutLinks;
