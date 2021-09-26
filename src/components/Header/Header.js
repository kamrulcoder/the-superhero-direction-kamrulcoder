import React from "react";
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="header-content">
        <h2>Find & Hire Expert Freelancers</h2>
        <h4>Freelancers will be selected from the list for our company.</h4>
        <h3>Pick the highest freelancer :  <span>10</span> </h3>
      </div>
    </div>
  );
};

export default Header;
