import "./LogIn.css";
function Login() {
  return (
    <>
      <div className="sign-up-component">
        <img src="./icons/Side-Image.png" alt="side-img" className="side-img" />

        <div className="signUp-form">
          <h1>Log in to ShopEase</h1>
          <p className="signUp-text">Enter your details below</p>
          <form className="signUp-details">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>
          <div className="login-btn-forgot-text">
            <button type="submit" className="login-button">
              Log In
            </button>
            <p> Forgot Password?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
