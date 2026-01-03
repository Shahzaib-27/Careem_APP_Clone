import React, { useRef } from 'react'
import HeaderStyle from "./heroSection.module.css"

export default function Header() {

const sectionRef = useRef(null);

const handleScrollLeft = () => {
  sectionRef.current.scrollBy({ left: -1272, behavior: "smooth" });
};
 
  const handleScrollRight = () => {
  sectionRef.current.scrollBy({ left: 1272, behavior: "smooth" });
};

  return (

    <div>
        <div className={HeaderStyle.video_container}>
    <video autoPlay muted loop playsInline>
    <source src="/Videos/video.mp4" type="video/mp4"/>
     Your browser does not support the video tag.
    </video>
    </div>

    <div className={HeaderStyle.contentcontainer}>

    <div className={HeaderStyle.boxcon}>
      <div className={HeaderStyle.box}>
      <h1>Go Anywhere</h1>
      <h3><i className="fa-regular fa-face-laugh-beam"></i>Rides</h3>
      <h3><i className="fa-regular fa-face-laugh-beam"></i>Taxi</h3>
      <h3><i className="fa-regular fa-face-laugh-beam"></i>Bike</h3>
      <h3><i className="fa-regular fa-face-laugh-beam"></i>Carrental</h3>
      <h3><i className="fa-regular fa-face-laugh-beam"></i>Schoolrides</h3>
      </div>
      <i className="fa-solid fa-arrow-right-long"></i>
    </div>

    <div className={HeaderStyle.boxcon1}>
      <div className={HeaderStyle.box1}>
          <h1>Eat anytime</h1>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Food</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>DineOut</h3>
      </div>
       <i className="fa-solid fa-arrow-right-long"></i>
    </div>

    <div className={HeaderStyle.boxcon2}>
      <div className={HeaderStyle.box2}>
         <h1>Get anything</h1>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Quik</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Quik Electronics</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Supermarkets</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Box</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Home Services</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Flowers</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Pharmacy</h3>
      </div>
       <i className="fa-solid fa-arrow-right-long"></i>
    </div>

    <div className={HeaderStyle.boxcon3}>
      <div className={HeaderStyle.box3}>
         <h1>Pay anyone</h1>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Pay</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Donation</h3>
          <h3><i className="fa-regular fa-face-laugh-beam"></i>Send money</h3>
      </div>
       <i className="fa-solid fa-arrow-right-long"></i>
    </div>

    </div>

    <div className={HeaderStyle.bannercontent}>
    <div className={HeaderStyle.slider}>

    <button className={HeaderStyle.arrowLeft} 
    onClick={handleScrollLeft}>
      <i className="fa-solid fa-chevron-left"  ></i>
    </button>

    <div className={HeaderStyle.track} ref={sectionRef}>
      <img src="/HeaderImages/img1.png" alt="banner" />
      <img src="/HeaderImages/img2.png" alt="banner" />
      <img src="/HeaderImages/img3.png" alt="banner" />
      <img src="/HeaderImages/img4.png" alt="banner" />
    </div>

    <button className={HeaderStyle.arrowRight} 
    onClick={handleScrollRight}>
      <i className="fa-solid fa-chevron-right"  ></i>
    </button>

  </div>
</div>


</div>
)
}
