import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce((sum, player) => sum + player.salary,0)
    return (
        <div className = "cart-custom">
            <p>Total Salary: ${totalSalary}</p>
        </div>
    );
};

export default Cart;