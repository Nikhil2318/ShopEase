import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlistItem } from "../../redux/wishlistSlice";
import { setProducts } from "../../redux/productsSlice";
import "./WishList.css";
import { useNavigate } from "react-router-dom";

function WishList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const wishList = useSelector((state) => state.wishlist.wishList);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const wishListedProducts = products.filter((product) =>
    wishList.includes(product.id)
  );

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
      <div className="sales wish-text">
        <span className="today-color"></span>
        <span className="today-text">Wishlist</span>
      </div>

      <div className="wishlist">
        {wishListedProducts.length > 0 ? (
          wishListedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
                onClick={() => navigate(`product/${product.id}`)}
              />
              <div className="product-info">
                <p className="product-title">{product.title}</p>
                <div className="price-rating-section">
                  <p className="product-price">${product.price}</p>
                  <div className="rating">
                    {renderstars(product.rating.rate)}{" "}
                    <span className="rating-count">{`(${product.rating.count})`}</span>
                  </div>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => dispatch(toggleWishlistItem(product.id))}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items in your wishlist.</p>
        )}
      </div>
    </>
  );
}

export default WishList;
