import { useDispatch, useSelector } from "react-redux";
import "./Checkout.css";
import paymentImg from "../../assets/icons/payments-method.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cartlistSlice";
function Checkout() {
  const cartItems = useSelector((state) => state.cartlist.items);
  const totalPrice = useSelector((state) => state.cartlist.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    toast.success("Order placed successfully");
    navigate("/");
  };
  return (
    <div className="checkout">
      <div className="checkout-form">
        <h2>Billing Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input type="text" id="zip" />
          </div>
        </form>
      </div>
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="summary-item" key={item.id}>
              <div className="summary-img">
                <img
                  src={item.image}
                  alt={item.title}
                  className="summary-image"
                />
              </div>
              <div className="summary-details">
                <p>{item.title}</p>
                <p>
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="summary-total">
          <div className="summary-total-1">
            <p>Subtotal:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <hr />
          <div className="summary-total-1">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="summary-total-1">
            <p>Total:</p>
            <p> ${totalPrice.toFixed(2)}</p>
          </div>
          <hr />
        </div>
        <div className="payment-method">
          <div className="summary-total-2">
            <label className="custom-radio">
              <input type="radio" id="bank" name="payment" value="bank" />
              <span className="radio-checkmark"></span>
              Bank Transfer
            </label>
            <img
              src={paymentImg}
              alt="payments_method_img"
              className="paymentsImg"
            />
          </div>
          <div className="summary-total-2">
            <label className="custom-radio">
              <input type="radio" id="cod" name="payment" value="cod" />
              <span className="radio-checkmark"></span>
              Cash on Delivery
            </label>
          </div>

          <div className="coupon-div">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-coupon-btn">Apply Coupon</button>
          </div>
        </div>
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
