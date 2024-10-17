/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
function Header() {
  const navigate = useNavigate();
  const wishListSize = useSelector((state) => state.wishlist.wishList.length);

  return (
    <>
      <div className="header">
        <h2 onClick={() => navigate("/")} className="shopEase-link">
          ShopEase
        </h2>
        <div className="pages">
          <span onClick={() => navigate("/")} className="nav-link">
            Home
          </span>
          <span onClick={() => navigate("/contact")} className="nav-link">
            Contact
          </span>
          <span onClick={() => navigate("/about")} className="nav-link">
            About
          </span>
          <span onClick={() => navigate("/signup")} className="nav-link">
            Sign Up
          </span>
        </div>
        <div className="icons">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
          />
          <img src="/icons/Search.png" alt="" className="search-icon" />
          <div className="heart-icon">
            <img
              src="/icons/Heart.png"
              alt=""
              className="heart-icon"
              onClick={() => navigate("/wish-list")}
            />
            {wishListSize > 0 && (
              <span className="wish-list-count">{wishListSize}</span>
            )}
          </div>
          <img src="/icons/Cart.png" alt="" className="cart-icon" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
