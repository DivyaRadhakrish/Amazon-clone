import React from "react";
import "./CheckoutProduct.css";
import { useDataLayerValue } from "./DataLayer";

function CheckoutProduct({ id, image, title, price, rating }) {
  //pulling the dispatched items from the basket in the datalayer
  const [{ basket }, dispatch] = useDataLayerValue();

  const removeFromBasket = () => {
    //removing the items from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>kr</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating) //Creating an empty array for rating and map the stars with the rating
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
