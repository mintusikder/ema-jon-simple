import React, { useEffect, useState } from "react";
import "./Shop.css";
import Prodect from "../Product/Prodect";
import Cart from "../Card/Cart";
import { addToDb, getShoppingCart } from "../Utilities/fackdb";

const Shop = () => {
  const [prodacts, setProdacts] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProdacts(data));
  }, []);
useEffect(() =>{
  const storedCard = getShoppingCart()
  const savedCart = []
  //step 1 get id to added product
  for(const id in storedCard){
    //step2 get product form products state by using id
    const addedProduct = prodacts.find(product => product.id === id)
    if(addedProduct){
      //added quantity 
      const quantity = storedCard[id]
      addedProduct.quantity = quantity
      // step 4 add the added product to the saved cart
      savedCart.push(addedProduct)
    }
    // console.log('added product', addedProduct)
  }
  // set the cart
  setCard(savedCart)
},[prodacts])
  const handelAddToCard = (product) => {
    const newCard = [...card, product];
    setCard(newCard);
    addToDb(product.id)
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
       <Cart card={card}></Cart>
      </div>
    </div>
  );
};

export default Shop;
