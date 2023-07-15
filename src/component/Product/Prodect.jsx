import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Prodect = (props) => {
  // console.log(props.handelAddToCard)
  //   console.log(props);
  const { img, name, seller, price, ratings } = props.product;
  const handelAddToCard = props.handelAddToCard;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="prodact-info">
        <h6 className="product-name">{name}</h6>
        <p>${price}</p>
        <p>Manufacturer :{seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button
        onClick={() => handelAddToCard(props.product)}
        className="btn-card"
      >
        Add to Cart
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Prodect;
