import logo from "../assets/logo.svg";

import { Pluralize } from "../utils/textulize";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { cartItems } = useCart();

  return (
    <div className="header border-b">
      <div className="logo-section">
        <Link className="" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <h1>Quick and Dirty Shop</h1>
      </div>
      <div className="cart-section">
        {cartItems.length > 0 ? (
          <div className="cart-items">
            <div className="cart-items-count text-lg">
              {cartItems.length} {Pluralize(cartItems.length, "item", "items")}
            </div>
            <Link className="" to="/basket">
              <div className="ml-2 text-lg text-gray-500 underline underline-offset-8 decoration-gray-600">
                View Basket
              </div>
            </Link>
          </div>
        ) : (
          <div className="cart-items">
            <div className="cart-items-count text-lg text-gray-400">
              Your Cart is Empty
            </div>
          </div>
        )}
      </div>
      <div className="login-section">
        {Auth.loggedIn() ? (
          <>
            <Link className="text-base m-2" to="/me">
              {Auth.getProfile().data.username}
            </Link>
            <button
              className="text-base border-2 border-gray-700 rounded-lg px-4 py-2 text-gray-700"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              className="mr-8 text-sm border-2 border-gray-700 rounded-lg px-4 py-2 text-gray-700"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="text-sm rounded-lg px-4 py-2 bg-gray-700 text-gray-200"
              to="/signup"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
