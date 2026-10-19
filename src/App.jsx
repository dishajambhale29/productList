
import { useState } from "react";

function App() {
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Headphones", price: 2000, category: "Electronics" },
    { id: 3, name: "Mobile Phone", price: 15000, category: "Electronics" },
    { id: 4, name: "T-Shirt", price: 800, category: "Clothing" },
    { id: 5, name: "Shoes", price: 2500, category: "Clothing" },
    { id: 6, name: "Watch", price: 1200, category: "Accessories" },
    { id: 7, name: "Shirt", price: 1200, category: "Clothing" },
    { id: 8, name: "Watch", price: 1200, category: "Accessories" },
    { id: 9, name: "Iphone", price: 120000, category: "Electronics" },
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Product Listing
        </h1>

        <p className="mb-6 text-gray-500">
          Search, filter and sort your products.
        </p>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col gap-4 rounded-lg bg-white p-5 shadow-sm sm:flex-row">

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500 sm:w-56"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500 sm:w-56"
          >
            <option value="none">Default Order</option>
            <option value="low">Price: Low to High</option>
          </select>
        </div>

        {/* Product Count */}
        <p className="mb-4 font-medium text-gray-600">
          Total products: {filteredProducts.length}
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="mb-3 text-2xl font-bold text-blue-600">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {product.category}
                </span>
              </div>
            ))
          ) : (
            <p className="col-span-full rounded-lg bg-white p-8 text-center text-gray-500">
              No products match your search.
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
