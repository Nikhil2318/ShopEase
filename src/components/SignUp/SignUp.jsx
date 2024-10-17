import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sign-up-component">
        <img src="./icons/Side-Image.png" alt="side-img" className="side-img" />

        <div className="signUp-form">
          <h1>Create an account</h1>
          <p className="signUp-text">Enter your details below</p>
          <form className="signUp-details">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
          </form>
          <div className="signUp-via-google">
            <img src="./icons/Icon-Google.png" alt="google-img" />
            <span>Sign Up with Google</span>
          </div>
          <p className="signIn-question">
            Already have an account? &nbsp;
            <span className="logIn" onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
