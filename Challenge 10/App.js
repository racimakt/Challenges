import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, checkout } from "./features/cartSlice";

function App() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const product = { id: 1, name: "Produit 1" };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mon Shop</h1>

      <button onClick={() => dispatch(addToCart(product))}>
        Ajouter {product.name}
      </button>

      <h2>Panier :</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Retirer
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => dispatch(checkout())}
        disabled={items.length === 0}
      >
        Checkout
      </button>
    </div>
  );
}

export default App;
