import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  //pulling the dispatched items from the basket in the datalayer
  const [{ basket }, dispatch] = useDataLayerValue();
  const addToBasket = () => {
    //dispatch the item into the datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small>kr</small>
        </p>
        <div className="product__rating">
          {Array(rating) //Creating an empty array for rating and map the stars with the rating
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="book image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
