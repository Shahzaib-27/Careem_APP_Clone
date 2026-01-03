import React from 'react'
import stylefooter from "./Footer.module.css"


export default function Footer() {
return (
<>

<div className={stylefooter.container}>
  <div className={stylefooter.contaienrheader}>
      <img src="/logo/Cream_logo.png" alt="creamlogo"/>
  </div>
  <div className={stylefooter.links_container}>
    <h2>Services</h2>
    <h4>GO</h4>
    <h4>Eat</h4>
    <h4>Get</h4>
    <h4>Pay</h4>
    <h4>Careem Plus</h4>
  </div>

   <div className={stylefooter.links_container1}>
    <h2>Partners</h2>
    <h4>Corporate packages</h4>
    <h4>Restaurant delivery</h4>
    <h4>B2B delivery</h4>
    <h4>Become a supplier</h4>
  </div>

   <div className={stylefooter.links_container2}>
    <h2>Join our team</h2>
    <h4>About us</h4>
    <h4>Engineering at Careem</h4>
    <h4>Careers</h4>
    <h4>Explore open roles</h4>
    <h4>Why Careem</h4>
  </div>

   <div className={stylefooter.links_container3}>
    <h2>About us</h2>
    <h4>Our social impact</h4>
    <h4>Information security</h4>
    <h4>Blog</h4>

    
  </div>


  <div className={stylefooter.links_container4}>
    <div className={stylefooter.links_inner_container4}>
         <select> 
      <option value="U.A.E" >U.A.E</option>
      <option value="Moroco">Moroco</option>
      <option value="Egypt">Egypt</option>
      <option value="Kuwait">Kuwait</option>
    </select>
    <br />
    <select> 
      <option value="English">English</option>
      <option value="Urdu">Urdu</option>
    </select>
    </div>

  <div className={stylefooter.links_container5}>
    <a><i className="fa-regular fa-circle-question"></i>Help Center</a><br />
    <a><i className="fa-solid fa-toolbox"></i>Book Your ride</a>
  </div>
  </div>

</div>

<div className={stylefooter.links_container6}>
   <p>All rights reserved. Careem © 2026</p> 

   <div className={stylefooter.links_inner_container6}>
   <h4>Terms of Service</h4> 
   <h4>Privacy Notices</h4>

   <div className={stylefooter.social_icons}>
    <a href="#"><i className="fab fa-facebook-f"></i></a>
    <a href="#"><i className="fab fa-x-twitter"></i></a>
    <a href="#"><i className="fab fa-linkedin-in"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
</div>

   </div>
</div>


</>
)
}
