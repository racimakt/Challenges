import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  // Charger les produits
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Charger les catégories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Filtrer
  const filtered = products.filter((p) =>
    filter === "all" ? true : p.category === filter
  );

  // Trier
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "rating") return b.rating.rate - a.rating.rate;
    return 0;
  });

  return (
    <div>
      {/* Filtres */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Tri */}
      <div>
        <label>Sort By: </label>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Select</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Produits */}
      <div className="products">
        {sorted.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <p>
              Rating: {p.rating.rate} ({p.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
