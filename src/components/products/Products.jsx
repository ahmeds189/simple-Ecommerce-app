import { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="products" id="products">
      <h1>Our Products</h1>

      <div className="products-container">
        {products.map((items) => {
          return (
            <div key={items.id}>
              <Product className={"product-card"} items={items} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
