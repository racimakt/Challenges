import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Liste des Produits</h2>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.price} $</p>
            <Link to={`/product/${p.id}`} className="btn">
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
