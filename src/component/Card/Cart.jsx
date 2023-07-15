import React from "react";
import "./Cart.css";
const Cart = ({card}) => {
    // console.log(card)
    let total =0
    let totalShipping =0
    for(const product of card){
        total = total + product.price
        totalShipping = totalShipping + product.shipping
    }
const tax = total*7/100
const grandTotal = total + totalShipping + tax
  return (
    <div className="cart">
      <h4 className="cart-title">Order Summary</h4>
      <p>Selected Items: {card.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
