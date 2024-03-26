import React, { useMemo, useReducer } from "react";

const initialState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += action.payload.quantity;
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + action.payload.quantity,
          totalPrice:
            state.totalPrice + action.payload.price * action.payload.quantity,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          totalItems: state.totalItems + action.payload.quantity,
          totalPrice:
            state.totalPrice + action.payload.price * action.payload.quantity,
        };
      }
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCart,
        totalItems: state.totalItems - action.payload.quantity,
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.quantity,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const cartSummary = useMemo(() => {
    return {
      items: cartState.cart,
      totalItems: cartState.totalItems,
      totalPrice: cartState.totalPrice.toFixed(2),
    };
  });

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Sample data
  const products = [
    { id: 1, title: "Product 1", price: 10.99 },
    { id: 2, title: "Product 2", price: 19.99 },
    { id: 3, title: "Product 3", price: 8.49 },
  ];

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={clearCart}>Clear Cart</button>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>
              {product.title} - Price: ${product.price}
            </p>
            <button onClick={() => addToCart({ ...product, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        {cartSummary.items.map((item) => (
          <div key={item.id}>
            <p>
              {item.title} - Quantity: {item.quantity}
            </p>
            <button onClick={() => addToCart(item)}>Add One More</button>
            <button onClick={() => removeFromCart(item)}>
              Remove One More
            </button>
          </div>
        ))}
      </div>
      <p>Total Items: {cartSummary.totalItems}</p>
      <p>Total Price: {cartSummary.totalPrice}</p>
    </div>
  );
};

export default ShoppingCart;
