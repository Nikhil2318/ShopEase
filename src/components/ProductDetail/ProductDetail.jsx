import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlistItem } from "../../redux/wishlistSlice.js";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.wishList);

  console.log("categoryProducts", categoryProducts);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const [selectedColor, setSelectedColor] = useState(null); // Track selected color

  const handleColorClick = (color) => {
    setSelectedColor(color); // Update the selected color
  };

  const handleWishlistToggle = (productId) => {
    dispatch(toggleWishlistItem(productId));
  };

  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    // Fetch product details using the ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  useEffect(() => {
    if (product.category) {
      fetch(`https://fakestoreapi.com/products/category/${product.category}`)
        .then((response) => response.json())
        .then((data) => {
          setCategoryProducts(data);
        })
        .catch((error) =>
          console.error("Error fetching category products:", error)
        );
    }
  }, [product.category]);

  const renderstars = (rating) => {
    const rounded = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rounded ? "star-m filled" : "star-m"}>
        ★
      </span>
    ));
  };
  console.log("category", product.category);

  return (
    <>
      <div className="product-info-2">
        <div className="product-detail-card">
          <div className="product-images-4">
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
          </div>
        </div>
        <div className="product-main-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-description">
          <h2>{product.title}</h2>
          <div className="rating info">
            {renderstars(product?.rating?.rate)}{" "}
            <span className="rating-count">{`(${product?.rating?.count})`}</span>
          </div>
          <p className="product-price-2">${product.price}</p>
          <p className="product-desc">{product.description}</p>
          <hr />
          <div className="product-colors">
            <p>Colours:</p>
            <div className="color-options">
              <div
                className={`color-option ${
                  selectedColor === "one" ? "selected" : ""
                }`}
                onClick={() => handleColorClick("one")}
              >
                <div className="color"></div>
              </div>
              <div
                className={`color-option ${
                  selectedColor === "two" ? "selected" : ""
                }`}
                onClick={() => handleColorClick("two")}
              >
                <div className="color two"></div>
              </div>
            </div>
          </div>

          <div className="product-details-3">
            <p>Size:</p>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className={`size-option ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="product-quant-btn">
            <div className="quantity-control">
              <button onClick={handleDecrement} className="quant-btn inc">
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value)))
                }
              />
              <button onClick={handleIncrement} className="quant-btn dec">
                +
              </button>
            </div>
            <button className="add-to-cart-btn-2">Buy Now</button>
          </div>

          <div className="product-delivery">
            <div className="product-delivery-card">
              <div className="delivery-img-2">
                <img
                  src="./icons/icon-delivery.png"
                  alt="icon_delivery"
                  className="delivery-icon"
                />
              </div>
              <div>
                <p className="end-text-1">FREE AND FAST DELIVERY</p>
                <p className="end-text-2">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            <div className="product-delivery-card">
              <div className="delivery-img-2">
                <img
                  src="./icons/Icon-return.png"
                  alt="return-icon"
                  className="delivery-icon"
                />
              </div>
              <div>
                <p className="end-text-1">Return Delivery</p>
                <p className="end-text-2">Free 30 Days Delivery Returns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sales">
        <span className="today-color"></span>
        <span className="today-text">Related Item</span>
      </div>
      <div className="related-products">
        <div className="best-selling-products-list">
          {categoryProducts.length > 0 ? (
            categoryProducts.map((item) => (
              <div key={item.id} className="product-card best-selling">
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />

                <div className="view-icons">
                  <div
                    className="icon"
                    onClick={() => handleWishlistToggle(item.id)}
                  >
                    {wishList.includes(item.id) ? (
                      <img src="./icons/heart-red.png" alt="heart-icon" />
                    ) : (
                      <img src="./icons/heart-small.png" alt="heart-icon" />
                    )}
                  </div>
                </div>

                <div className="product-info">
                  <p className="product-title">{item.title}</p>
                  <div className="price-rating-section">
                    <p className="product-price">${item.price}</p>
                  </div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading related products...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
