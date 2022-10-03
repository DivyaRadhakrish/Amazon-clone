import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useDataLayerValue(); // This pulls the currentstate of the basket from the datalayer

  const handleAuthentication = () => {
    if (user) {
      //If there is an user, there will be tha authentication of signOut
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          {/** If there was no user, then only it navigate to the login page */}
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {/*If there is an user signout otherwise signin**/}
              {user ? "Sign Out" : "Sign In"}
            </span>
            {}
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo  header__basketCounts">
              {/**It dynamically shows the number of items in the basket */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
