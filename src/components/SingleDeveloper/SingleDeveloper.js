import React from 'react';
import './SingleDeveloper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus } from '@fortawesome/free-solid-svg-icons'


const SingleDeveloper = (props) => {
  const {developer,handleClickEvent } = props;
  const {id,name,email,phone,sallary,profile,skills,country, jobTitle} = props.developer;
    return (
      <div  className="col-lg-4">
        <div className="main-box">
          <div className="big-circle">
            <div className="small-circle">
             <img src={profile} alt="" />
            </div>
          </div>
          <h2 className="heading-name">{name}</h2>
          <h3 className="heading-work">{jobTitle}</h3>

            <ul  className="cardList">
              <li><strong>Salary    </strong><span>{sallary} TK</span></li>
              <li><strong>Email    </strong>   <span>{email}</span></li>
              <li><strong>Skills     </strong><span className="skills">{skills}</span></li>
              <li><strong>Phone   </strong>{phone}</li>
              <li><strong>Country  </strong>  <span>{country}</span></li>
            </ul>
          <button   onClick={() => handleClickEvent(developer)} className="follow_btn">
          <FontAwesomeIcon icon={faUserPlus} /> Add Salary 
          </button>
        </div>
      </div>
    );
};

export default SingleDeveloper;