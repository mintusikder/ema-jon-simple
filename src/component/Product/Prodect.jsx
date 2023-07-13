import React from 'react';
import './Product.css'

const Prodect = (props) => {
    console.log(props.product)
    const {img,name,seller,quantity,price} = props.product

    return (
        <div className='product'> 
            <img src={img} alt="" />
            <div className='prodact-info'>
            <h6 className='product-name'>{name}</h6>
            <p>${price}</p>
            <p>Manufacturer :{seller}</p>
            <p>Rating : {quantity}</p>
            </div>
            <button className='btn-card'>Add to Cart</button>
        </div>
    );
};

export default Prodect;