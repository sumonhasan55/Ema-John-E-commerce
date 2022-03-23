import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    const {handleAddToCart} = props;
    

    return (
        <div className='product'>
            <img  src={img} alt=''/>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p> <small> Pricer:{price}</small></p>
            <p>Manufature:{seller}</p>
            <p>Rating:{ratings}</p>
            <button onClick={() => props.handleAddToCart(props.product)} className='cart-button'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
            



        </div>
    );
};

export default Products;