import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
function Login() {
  const navigate = useNavigate(); // It allows to change the url

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Targetting the signIn button
  const signIn = (e) => {
    e.preventDefault(); // Just for stay put while refreshing(eventhough not needed in react)

    //firebase login
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully navigate user with email and password to the homepage
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  //Targetting the NewAccount button
  const register = (e) => {
    e.preventDefault(); // Just for stay put while refreshing(eventhough not needed in react)

    //firebase login
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password and navigate to the homepage
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            } /**whenever it gets an email an event is triggered which in result, it maps the email to the value, i.e {email} */
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            } /**whenever it gets an password an event is triggered which in result, it maps to the password to the value, i.e {password} */
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign in
          </button>
          <p>
            By signing-in you agree to DIVYAMAZON's Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </form>

        <h6 className="login__newtoAmazon">New to Divyamazon</h6>
        <button onClick={register} className="login__registerButton">
          Create your Divyamazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
