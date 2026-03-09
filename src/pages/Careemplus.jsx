
import React, { useRef } from 'react'

import NavBar from "../Components/Nav/nav.jsx"
import Footer from "../Components/Footer/Footer.jsx"

import HeaderStyle from "../Components/heroSection/heroSection.module.css"


export default function Careemplus() {

const sectionRef = useRef(null);

const handleScrollLeft = () => {
  sectionRef.current.scrollBy({ left: -1272, behavior: "smooth" });
};
 
  const handleScrollRight = () => {
  sectionRef.current.scrollBy({ left: 1272, behavior: "smooth" });
};


  return (
    <>
    <NavBar/>
       <div className='mt-40 min-h-screen '>
         <div className='ml-2'>
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
      </div>
    <Footer/>
    </>
  )
}