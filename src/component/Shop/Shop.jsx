import React, { useEffect, useState } from "react";
import "./Shop.css";
import Prodect from "../Product/Prodect";

const Shop = () => {
  const [prodacts, setProdacts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProdacts(data));
  }, []);
  return (
    <div className="shop-Container">
      <div className="prodact-container">
        {prodacts.map((product) => (
          <Prodect key={product.id} product={product}></Prodect>
        ))}
      </div>
      <div className="card-container">
        <h4>Ordar Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
