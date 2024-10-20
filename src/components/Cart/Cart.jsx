import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../redux/cartlistSlice.js";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartlist.items);
  const totalQuantity = useSelector((state) => state.cartlist.totalQuantity);
  const totalPrice = useSelector((state) => state.cartlist.totalPrice);
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart!");
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateCartQuantity({ id, quantity }));
  };

  return (
    <>
      <div className="cart">
        {totalQuantity === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="cart-item">
                    <td>
                      <div
                        onClick={() => handleRemoveItem(item.id)}
                        style={{
                          color: "#dd4444",
                          cursor: "pointer",
                          fontSize: "20px",
                          marginBottom: "5px",
                        }}
                        className="delete-product"
                      >
                        X
                      </div>
                      <img
                        src={item.image || "placeholder_image_url"}
                        alt={item.title}
                        className="cart-item-image"
                      />
                    </td>
                    <td>{item.title || "Product Title"}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="quantity-input"
                        onChange={(e) =>
                          handleQuantityChange(item.id, Number(e.target.value))
                        }
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-summary"></div>
            <div className="cart-buttons">
              <button className="return-button" onClick={() => navigate("/")}>
                Return to Shopping
              </button>
            </div>
          </>
        )}
      </div>

      <div className="card-div">
        <div className="card-total">
          <h2>Total</h2>
          <div className="card-total-details">
            <p>Sub Total</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <hr />
          <div className="card-total-details">
            <p>Shipping</p>
            <p>$0.00</p>
          </div>
          <hr />
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button
            className="checkout-button"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
