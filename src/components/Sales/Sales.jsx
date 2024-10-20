import { useEffect, useState } from "react";
import "./Sales.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlistItem } from "../../redux/wishlistSlice.js";
import ripple from "../Loading/ripple.svg";
import toast from "react-hot-toast";

import {
  addToCart,
  removeFromCart,
  updateCartQuantity,
} from "../../redux/cartlistSlice.js";
const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

function Sales() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [selectedCategory, setSelectedCategory] = useState(null);

  const wishList = useSelector((state) => state.wishlist.wishList);
  const cartItems = useSelector((state) => state.cartlist.items);

  const handleWishlistToggle = (productId) => {
    dispatch(toggleWishlistItem(productId));
  };

  const handleClick = (product) => {
    handleWishlistToggle(product.id);

    if (wishList.includes(product.id)) {
      toast.success("Removed from favorites");
    } else {
      toast.success("Added to favorites");
    }
  };
  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        title: product.title,
        image: product.image,
        id: product.id,
        price: product.price,
        quantity: product.quantity || 1,
      })
    );
    toast.success("Added to cart");
  };

  const handleIncrement = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        price: product.price,
        quantity: 1,
      })
    );
  };

  const handleDecrement = (product) => {
    const cartItem = cartItems.find((item) => item.id === product.id);

    if (cartItem && cartItem.quantity > 1) {
      dispatch(
        updateCartQuantity({
          id: product.id,
          quantity: cartItem.quantity - 1,
        })
      );
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const categories = [
    { id: 1, name: "Phones", icon: "./icons/Category-CellPhone.png" },
    { id: 2, name: "Computers", icon: "./icons/Category-Computer.png" },
    { id: 3, name: "SmartWatch", icon: "./icons/Category-SmartWatch.png" },
    { id: 4, name: "Camera", icon: "./icons/Icon-Camera.png" },
    { id: 5, name: "HeadPhone", icon: "./icons/Category-Headphone.png" },
    { id: 6, name: "Gaming", icon: "./icons/Category-Gamepad.png" },
  ];

  const formatTwoDigits = (num) => (num < 10 ? `0${num}` : num);

  function calculateTimeLeft() {
    const distance = targetDate - new Date().getTime();
    if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const renderstars = (rating) => {
    const rounded = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rounded ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <>
      <div className="sales">
        <span className="today-color"></span>
        <span className="today-text">Today&apos;s</span>
      </div>
      <div className="flash-sales">
        <p className="flash-sales-text">Flash Sales</p>
        <div className="timer">
          <div className="timer-heading">
            <p className="days-text">Days</p>
            <p className="days-timer">{formatTwoDigits(timeLeft.days)}</p>
          </div>
          <span className="colon">:</span>
          <div className="timer-heading">
            <p className="days-text">Hours</p>
            <p className="days-timer">{formatTwoDigits(timeLeft.hours)}</p>
          </div>
          <span className="colon">:</span>
          <div className="timer-heading">
            <p className="days-text">Minutes</p>
            <p className="days-timer">{formatTwoDigits(timeLeft.minutes)}</p>
          </div>
          <span className="colon">:</span>
          <div className="timer-heading">
            <p className="days-text">Seconds</p>
            <p className="days-timer">{formatTwoDigits(timeLeft.seconds)}</p>
          </div>
        </div>
      </div>

      <div className="product-details">
        {products.length > 0 ? (
          products.map((product) => {
            const cartItem = cartItems.find((item) => item.id === product.id);
            const quantityInCart = cartItem ? cartItem.quantity : 0;

            return (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                  onClick={() => navigate(`product/${product.id}`)}
                />
                <div className="view-icons">
                  <div className="icon" onClick={() => handleClick(product)}>
                    {wishList.includes(product.id) ? (
                      <img src="./icons/heart-red.png" alt="heart-icon" />
                    ) : (
                      <img src="./icons/heart-small.png" alt="heart-icon" />
                    )}
                  </div>
                </div>
                <div className="product-info">
                  <p className="product-title">{product.title}</p>
                  <div className="price-rating-section">
                    <p className="product-price">${product.price}</p>
                    <div className="rating">
                      {renderstars(product.rating.rate)}{" "}
                      <span className="rating-count">{`(${product.rating.count})`}</span>
                    </div>
                  </div>

                  <div className="add-to-cart-section">
                    {quantityInCart > 0 ? (
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => handleDecrement(product)}
                        >
                          -
                        </button>
                        <span className="quantity-display">
                          {quantityInCart}
                        </span>
                        <button
                          className="quantity-btn"
                          onClick={() => handleIncrement(product)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "100px" }} src={ripple} />
          </div>
        )}
      </div>

      <button className="view-products-btn">View All Products</button>
      <hr className="end-line" />

      <div className="sales">
        <span className="today-color"></span>
        <span className="today-text">Categories</span>
      </div>
      <div className="categories">
        <p className="browse-text">Browse By Category</p>
        <div className="category-list">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-item ${
                selectedCategory === category.id ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                src={category.icon}
                alt={`${category.name}_img`}
                className={category.id === 4 ? "camera-icon" : ""}
              />
              <p className="camera-name">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sales">
        <span className="today-color"></span>
        <span className="today-text">This Month</span>
      </div>

      <div className="best-selling-products">
        <p className="best-selling-text">Best Selling Products</p>
        <div className="best-selling-products-list">
          {products.length > 0 &&
            products
              .sort((a, b) => b.rating.count - a.rating.count)
              .slice(0, 6)
              .map((product) => {
                const cartItem = cartItems.find(
                  (item) => item.id === product.id
                );
                const quantityInCart = cartItem ? cartItem.quantity : 0;

                return (
                  <div key={product.id} className="product-card best-selling">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                      onClick={() => navigate(`product/${product.id}`)}
                    />
                    <div className="view-icons">
                      <div
                        className="icon"
                        onClick={() => handleWishlistToggle(product.id)}
                      >
                        {wishList.includes(product.id) ? (
                          <img src="./icons/heart-red.png" alt="heart-icon" />
                        ) : (
                          <img src="./icons/heart-small.png" alt="heart-icon" />
                        )}
                      </div>
                    </div>
                    <div className="product-info">
                      <p className="product-title">{product.title}</p>
                      <div className="price-rating-section">
                        <p className="product-price">${product.price}</p>
                        <div className="rating">
                          {renderstars(product.rating.rate)}{" "}
                          <span className="rating-count">{`(${product.rating.count})`}</span>
                        </div>
                      </div>

                      <div className="add-to-cart-section">
                        {quantityInCart > 0 ? (
                          <div className="quantity-controls">
                            <button
                              className="quantity-btn"
                              onClick={() => handleDecrement(product)}
                            >
                              -
                            </button>
                            <span className="quantity-display">
                              {quantityInCart}
                            </span>
                            <button
                              className="quantity-btn"
                              onClick={() => handleIncrement(product)}
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        <div className="jbl-img">
          <img src="./icons/jbl.png" alt="" />
        </div>
        <div className="end-parts">
          <div className="end-card">
            <div className="delivery-img">
              <img
                src="./icons/icon-delivery-3.png"
                alt="icon_delivery"
                className="delivery-icon"
              />
            </div>
            <p className="end-text-1">FREE AND FAST DELIVERY</p>
            <p className="end-text-2">Free delivery for all orders over $140</p>
          </div>

          <div className="end-card">
            <div className="delivery-img">
              <img
                src="./icons/Icon-Customer-service.png"
                alt="icon_delivery"
                className="delivery-icon"
              />
            </div>
            <p className="end-text-1">FREE AND FAST DELIVERY</p>
            <p className="end-text-2">Free delivery for all orders over $140</p>
          </div>

          <div className="end-card">
            <div className="delivery-img">
              <img
                src="./icons/Icon-secure.png"
                alt="icon_delivery"
                className="delivery-icon"
              />
            </div>
            <p className="end-text-1">FREE AND FAST DELIVERY</p>
            <p className="end-text-2">Free delivery for all orders over $140</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
