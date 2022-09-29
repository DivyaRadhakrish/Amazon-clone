import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useDataLayerValue } from "./DataLayer";
import Login from "./Login";

function App() {
  const [{}, dispatch] = useDataLayerValue();
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
