import React, { useEffect, useState } from "react";
import "./Shop.css";
import Prodect from "../Product/Prodect";

const Shop = () => {
  const [prodacts, setProdacts] = useState([]);
  const [card, setCard] = useState([])
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProdacts(data));
  }, []);
  const handelAddToCard = (product) => {
    const newCard = [...card, product]
    setCard(newCard)
  };
  return (
    <div className="shop-Container">
      <div className="prodact-container">
        {prodacts.map((product) => (
          <Prodect
            key={product.id}
            product={product}
            handelAddToCard={handelAddToCard}
          ></Prodect>
        ))}
      </div>
      <div className="card-container">
        <h4>Ordar Summary {card.length}</h4>
      </div>
    </div>
  );
};

export default Shop;
