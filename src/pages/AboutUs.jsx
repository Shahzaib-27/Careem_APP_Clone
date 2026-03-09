
import React from 'react'

import NavBar from "../Components/Nav/nav.jsx"
import Footer from "../Components/Footer/Footer.jsx"
import MainSectionStyle from "../Components/Main/MainSection.module.css"

export default function AboutUs() {
  return (
    <>
    <NavBar/>
    <div className=' min-h-screen '>
      <div className='ml-2 flex '>
        <div className={MainSectionStyle.FirstContainer}>
                <div className={MainSectionStyle.SecondContainer} >
                  <h1 className='font-bold text-center '>About Us</h1>
                  <p>
                    Careem's purpose is to simplify and improve the lives of people <br />
                    and build an awesome organisation that inspires. <br />
                    Learn more about our purpose, people and services.
                  </p>
                <span className='text-center flex justify-center items-center '>
                  <button className='text-center flex justify-center items-center '>Read More</button>
                </span>
                
                </div>
        
                <div className={MainSectionStyle.thirdContainer_img}>
                  <img src="/MainSectionImages/CREAMPROIMG.png" alt="banner" />
                </div>
                
              </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
