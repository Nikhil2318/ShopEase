import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/LogIn/Login";
import NotFound from "./components/NotFound/NotFound";
import WishList from "./components/WishList/WishList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import store from "./redux/store";
import Cart from "./components/Cart/Cart";
import { Toaster } from "react-hot-toast";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-left" reverseOrder={false} />

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart-list" element={<Cart />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wish-list/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
