import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./Signin.style.scss";

const Signin = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setSignInData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignInData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="email"
          name="email"
          value={signInData.email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          value={signInData.password}
          handleChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
