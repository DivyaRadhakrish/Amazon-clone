export const initialState = {
  basket: [], //in the initialstate the basket is 0
  user: null,
};

//selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0); // getting the basket and redeuce(maps or iterate through the basket and tally the amount)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, //return whatever the original state was
        basket: [...state.basket, action.item], //whatever the current state of the basket, the action is to add the item in to it.
      };

    case "REMOVE_FROM_BASKET":
      // finding the index of the selected basketitem(with its id) and perform the action of the id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      //created a variable newBasket to copy the basket(which has removed items)
      let newBasket = [...state.basket]; // copy whatever the state of the basket
      if (index >= 0) {
        // if the index is >=0 , then splice the element by 1 regarding its index
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product (id:${action.id})as it is not in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
