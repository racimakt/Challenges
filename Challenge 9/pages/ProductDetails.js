import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div className="details">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>
          <b>Prix:</b> {product.price} $
        </p>
        <p>
          <b>Note:</b> {product.rating?.rate} ⭐ ({product.rating?.count} avis)
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
