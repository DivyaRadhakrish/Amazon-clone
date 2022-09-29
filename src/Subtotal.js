import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import basket, { getBasketTotal } from "./reducer";
import { useDataLayerValue } from "./DataLayer";

function Subtotal() {
  //pulling the dispatched items from the basket in the datalayer
  const [{ basket }, dispatch] = useDataLayerValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>
                {value}
                {/**It'll render the value(the total amount) from the getBasketTotal() */}
              </strong>
            </p>
            <small classname="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        /**This block is for displaying the Amount */
        decimalScale={2} // 2 decimal scale indicates the kronas after the decimal point e.g: kr 11257.67
        value={getBasketTotal(basket)} //value determines the amount
        displayType={"text"}
        thousandSeparator={true} //comma will be consider while getting the amount in thousand
        prefix={" kr"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
