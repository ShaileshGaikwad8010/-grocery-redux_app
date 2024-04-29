import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../Store/cartSlice";
import products from '../Product_Api/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'

function ProductList() {
    const [clickedButtonId, setClickedButtonId] = useState(null); // Track the ID of the clicked button
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setClickedButtonId(product.id); // Set the ID of the clicked button
        setTimeout(() => {
            setClickedButtonId(null); // Reset the ID after a delay
        }, 500); // Adjust the delay as needed (milliseconds)
    };

    const getCartItemQuantity = (product) => {
        const cartItem = cartItems.find(item => item.id === product.id);
        return cartItem ? cartItem.quantity : 0;
    };

    return (
        <>
            <div className="container">
                <div className="row f1">
                    {products.map((product) => {
                        return (
                            <div className="col-4 my-3" key={product.id}>
                                <Card className="f2">
                                    <Card.Img className="img" variant="top" src={product.img} />
                                    <Card.Body className="f3">
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Title>{product.price} per kg</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <Button
                                            className={clickedButtonId === product.id ? 'f4 clicked-animation' : 'f4'}
                                            variant="primary"
                                            onClick={() => handleAddToCart(product)}>
                                            Add to Cart ({getCartItemQuantity(product)})
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default ProductList;
