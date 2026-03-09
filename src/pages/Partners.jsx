import React from 'react'

import NavBar from "../Components/Nav/nav.jsx"
import Footer from "../Components/Footer/Footer.jsx"

import MainSectionStyle from "../Components/Main/MainSection.module.css"

export default function Partners() {
  return (
    <>
    <NavBar/>
     <div className='mt-20 min-h-screen '>
         <div className='ml-2'>
          <div className={MainSectionStyle.body}>
                  <div className={MainSectionStyle.FirstContainer1}>
                    <div className={MainSectionStyle.thirdContainer_img1}>
                      <img src="/MainSectionImages/creanimg2.png" alt="banner" />
                    </div>
          
                    <div className={MainSectionStyle.SecondContainer1}>
                      <h1 className='font-bold'>Captains</h1>
                      <p>
                        Drive or deliver with Careem and earn with every ride. Choose 
                        your own hours, enjoy amazing Captain rewards and get
                        professional training
                      </p>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}