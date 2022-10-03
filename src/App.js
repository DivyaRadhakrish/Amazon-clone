import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useDataLayerValue } from "./DataLayer";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    //added Listener,it'll listen when the user is logged in/out
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);
      if (authUser) {
        //If the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user logged out
        dispatch({
          type: "SET_USER",
          use: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                {<Header />}
                {<Home />}
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                {<Header />}
                {<Checkout />}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
