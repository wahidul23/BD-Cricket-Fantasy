import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalSalary = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const player = cart[i];
    //     totalSalary = totalSalary + player.salary;
    // }
    const totalSalary = cart.reduce((sum, player) => sum + player.salary,0)
    return (
        <div>
            <h2>Total cart: {cart.length}</h2>
            <p>Total Salary: ${totalSalary}</p>
        </div>
    );
};

export default Cart;