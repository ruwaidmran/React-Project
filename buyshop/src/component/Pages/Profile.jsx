/* eslint-disable*/
import React from "react";
import "./Profile.css";
const Profile = (prop)=>{
return (
<section className="bg-Profile">
   <div className="container">
      <div className="expense_items d-flex justify-content-center align-items-center">
      <div className="expense__items__description">
   
         <div className="descript__left">
            <div className="heading">
               <h4>{prop.title}Title</h4>
            </div>
            <div className="date">
                <strong>Date</strong>
                </div>
         </div>
         <div className="amount__side">
            <div className="expense__amount">
               <p>$ 300</p>
            </div>
         </div>
      </div>

      </div>
   </div>
</section>
);
}
export default Profile