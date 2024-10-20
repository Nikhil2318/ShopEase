/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");
  const wishListSize = useSelector(
    (state) => state.wishlist?.wishList.length || 0
  );
  const totalQuantity = useSelector((state) => {
    console.log("Current Redux State:", state);
    return state.cartlist?.totalQuantity || 0;
  });

  const handleLinkClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <div className="logo-img">
            <img src="/shopEase.svg" alt="logo" />
          </div>
          <h2 onClick={() => handleLinkClick("/")} className="shopEase-link">
            ShopEase
          </h2>
        </div>
        <div className="pages">
          <span
            onClick={() => handleLinkClick("/")}
            className={`nav-link ${activeLink === "/" ? "active" : ""}`}
          >
            Home
          </span>
          <span
            onClick={() => handleLinkClick("/contact")}
            className={`nav-link ${activeLink === "/contact" ? "active" : ""}`}
          >
            Contact
          </span>
          <span
            onClick={() => handleLinkClick("/about")}
            className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
          >
            About
          </span>
          <span
            onClick={() => handleLinkClick("/signup")}
            className={`nav-link ${activeLink === "/signup" ? "active" : ""}`}
          >
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
              alt="heart_icon"
              className="heart-icon"
              onClick={() => handleLinkClick("/wish-list")}
            />
            {wishListSize > 0 && (
              <span className="wish-list-count">{wishListSize}</span>
            )}
          </div>
          <div className="heart-icon-2">
            <img
              src="/icons/Cart.png"
              alt="cart-icon"
              className="cart-icon"
              onClick={() => handleLinkClick("/cart-list")}
            />
            {totalQuantity > 0 && (
              <span className="cart-list-count">{totalQuantity}</span>
            )}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
