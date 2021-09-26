import React from 'react';
import Cart from '../Cart/Cart';
import SingleDeveloper from '../SingleDeveloper/SingleDeveloper';
import { useState, useEffect } from 'react';


const DeveloperList = () => {
  const [developers, setdevelopers] = useState([]);
  const [carts, setCarts] = useState([]);

useEffect(() => {
  fetch('../data.JSON')
  .then(res => res.json())
  .then(data => setdevelopers(data))

}, []);

// https://api.npoint.io/c37bc92d5fc9378d6d03

const removeUser = (userId) => {
   const newCartitem = carts.filter(user => user.id !== userId);
   setCarts(newCartitem)
}

let key = 1;


const handleClickEvent  = user => {

  const newCart = [...carts, user];
  setCarts(newCart);

   
}


const singleDeveloper = developers.map(developer =>  <SingleDeveloper key={developer.id} handleClickEvent={handleClickEvent}  developer={developer} />)


    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">              
               {singleDeveloper}
              </div>
            </div>
            <div className="col-lg-3">
              <Cart removeUser={removeUser}   carts ={carts} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default DeveloperList;