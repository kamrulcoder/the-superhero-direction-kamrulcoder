import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes } from '@fortawesome/free-solid-svg-icons'

const CartPerson = (props) => {
    const {name, serial ,removeUser,id}  = props;
    return (
        <li className="list-group-item  d-flex  align-items-center justify-content-between" >{serial}.  {name}  <FontAwesomeIcon  onClick={() => removeUser(id)} icon={faTimes} className="text-danger  " /> </li>
    );
};

export default CartPerson;