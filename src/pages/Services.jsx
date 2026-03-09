import React from 'react'

import NavBar from "../Components/Nav/nav.jsx"
import Footer from "../Components/Footer/Footer.jsx"

import MainSectionStyle from "../Components/Main/MainSection.module.css"

export default function Services() {
  return (
    <>
    <NavBar/>
      <div className='min-h-screen '>
         <div className=''>
          <div className={MainSectionStyle.body}>
          {/* 1 */}
  
            <div className={MainSectionStyle.inlinecon}>
  
                <div className={MainSectionStyle.FirstContainer4}>
                <div className={MainSectionStyle.thirdContainer_img4}>
                  <img src="/MainSectionImages/creimg5.png" alt="banner" />
                </div>

                <div className={MainSectionStyle.SecondContainer4}>
                  <h1 className='font-bold'>Valentina's Day, made easy with cream</h1>
                  <p>
                  Valentine's Day should be about love, not last-minute stress. Whether <br />
                  you need a romantic dinner, flowers, or a thoughtful gift, <br />
                  Careem's curated Valentine's Day offers have you covered. <br />
                  </p>
                  <button>Read More</button>
                </div>
              </div>

                {/* 2 */}
              <div className={MainSectionStyle.FirstContainer4}>
                <div className={MainSectionStyle.thirdContainer_img4}>
                  <img src="/MainSectionImages/creimg6.png" alt="banner" />
                </div>

                <div className={MainSectionStyle.SecondContainer4}>
                  <h1 className='font-bold'>Zero fees & member-only FX rates</h1>
                  <p>
                      We're super excited to introduce zero fees on international remittance as <br />
                      well as FX ratecheaper than Google for first-time senders to India or <br />
                      Pakistan - exclusive to Careem Plus members <br />
                  </p>
                  <button>Read More</button>
                </div>
              </div>

                {/* 3 */}
              <div className={MainSectionStyle.FirstContainer4}>
                <div className={MainSectionStyle.thirdContainer_img4}>
                  <img src="/MainSectionImages/creimg7.png" alt="banner" />
                </div>

                <div className={MainSectionStyle.SecondContainer4}>
                  <h1 className='font-bold'>Our social impact</h1>
                  <p>
                    We believe deeply in driving social and economic progress across <br />
                    the region. We use our app to connect customers to the <br />
                    communities that need the most support.
                  </p>
                  <button>Read More</button>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}