import React from 'react';
import classes from './Cart.module.css'
import CartPerson from './CartPerson';

const  Cart = (props) => {
    const {carts, removeUser} = props;

    const cartlistItem = carts.map((cart, ind)=>  <CartPerson removeUser={removeUser} id={cart.id}  name={cart.name}  key= {++ind}  serial={++ind}></CartPerson>);

    const totalAmount = carts.reduce((total, current) => {
        return total +current.sallary ;
    },0)
    
    return (
      <div>
        <div className={classes.classList}>
          <div className={classes.cartHeader}>
            <h4>Hire Person and Calculation</h4>
          </div>

          <h5>Total Person : {carts.length}</h5>
          <h5>Total Amount : {totalAmount} TK</h5>
          <ul className="list-group  mt-4 ">{cartlistItem}</ul>
          <button>Checkout</button>
        </div>
      </div>
    );
};

export default Cart;