import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <h2>Panier</h2>
      <p>Votre panier est vide pour l’instant.</p>
      <Link to="/checkout" className="btn">
        Aller au paiement
      </Link>
    </div>
  );
}

export default Cart;
