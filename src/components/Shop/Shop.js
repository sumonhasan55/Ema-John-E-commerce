import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handleAddToCart = (product) =>{
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }
  
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products key={product.id}
                         product={product} 
                         handleAddToCart={handleAddToCart}></Products>)
                }
            </div>
            
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <div className='btn-cnotainer'>
                <button className='clear-btn'>Clear Cart</button>
                <button className='review-btn'>Review Order</button>

                </div>
              
            </div>
            
        </div>
    );
};

export default Shop;