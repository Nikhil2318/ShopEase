import { useNavigate } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer-contacts">
        <div className="footer-card">
          <p className="logo">ShopEase</p>
          <p>Subscribe</p>
          <p className="discount">Get 10% off your first order</p>
          <div className="input">
            <input
              type="text"
              placeholder="Enter your email"
              className="footer-email-input"
            />
            <img
              src="./icons/icon-send.png"
              alt="send_icon"
              className="email-send-icon"
            />
          </div>
        </div>

        <div className="footer-card">
          <p className="footer-top">Support</p>
          <p className="footer-content">
            111 Bijay sarani, Dhaka,
            <br />
            DH 1515, Bangladesh
          </p>
          <p className="footer-content">shopEase@gmail.com</p>
          <p className="discount">+88015-88888-9999</p>
        </div>
        <div className="footer-card">
          <p className="footer-top">Account</p>
          <p className="footer-content">My Account</p>
          <p className="footer-content" onClick={() => navigate("/signup")}>
            Login / Register
          </p>
          <p className="footer-content">Cart</p>
          <p className="footer-content" onClick={() => navigate("/wish-list")}>
            Wishlist
          </p>
          <p className="footer-content" onClick={() => navigate("/")}>
            Shop
          </p>
          <p className="discount">Get 10% off your first order</p>
        </div>
        <div className="footer-card">
          <p className="footer-top">Quick Link</p>
          <p className="footer-content">Privacy</p>
          <p className="footer-content">Terms Of Use</p>
          <p className="footer-content">FAQ</p>
          <p className="footer-content">Contact</p>
        </div>

        <div className="footer-card">
          <p className="footer-top">Download App</p>
          <p className="footer-download-text">
            {" "}
            Save $3 with App New User Only{" "}
          </p>
          <div className="apps">
            <img src="./icons/Qr-Code.png" alt="QrCode" />
            <div className="downloads">
              <img src="./icons/GooglePlay.png" alt="GooglePlayImg" />
              <img src="./icons/download-appstore.png" alt="AppStoreImg" />
            </div>
          </div>

          <div className="social-media">
            <img src="./icons/Icon-Facebook.png" alt="Facebook" />
            <img src="./icons/icon-instagram.png" alt="Instagram" />
            <img src="./icons/Icon-Twitter.png" alt="Twitter" />
            <img src="./icons/Icon-Linkedin.png" alt="YouTube" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
