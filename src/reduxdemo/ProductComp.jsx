import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice';

export const ProductComp = () => {
    const dispatch = useDispatch();
    // const addToCartHandler = () => {}
  return (

    <div>
        <h1>Product Component</h1>
        <div>
            <h1>IPHONE 15</h1>
            <h2>Price: $1500</h2>
            <p>It is a good phone</p>
            <button onClick={()=>{dispatch(addToCart({name:"iphone15",price:1500}))}}>Add to cart</button>
        </div>
        <div>
            <h1>IPHONE 16</h1>
            <h2>Price: $1600</h2>
            <p>It is a good phone</p>
            
            <button onClick={()=>{dispatch(addToCart({name:"iphone15",price:1500,color:"blue"}))}}>Add to cart</button>
        </div>
    </div>
  )
}
