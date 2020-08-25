import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart);
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    return (
        <div>
            <h3>This is cart : {cart.length}</h3>
            <p>TotalPopulation : {totalPopulation}</p>
        </div>
    );
};

export default Cart;