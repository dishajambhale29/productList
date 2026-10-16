
import { useState } from "react";

function App() {
  // 1. Product data
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Headphones", price: 2000, category: "Electronics" },
    { id: 3, name: "Mobile Phone", price: 15000, category: "Electronics" },
    { id: 4, name: "T-Shirt", price: 800, category: "Clothing" },
    { id: 5, name: "Shoes", price: 2500, category: "Clothing" },
    { id: 6, name: "Watch", price: 1200, category: "Accessories" },
  ]);

  // 2. State for search, category and sorting
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  // 3. Search and filter products
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // 4. Sort products by price
  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Product Listing</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
      </select>

      {/* Price sorting */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="none">Default Order</option>
        <option value="low">Price: Low to High</option>
      </select>

      <p>Total products: {filteredProducts.length}</p>

      {/* Display products */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>
              <p>Category: {product.category}</p>
            </div>
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;
