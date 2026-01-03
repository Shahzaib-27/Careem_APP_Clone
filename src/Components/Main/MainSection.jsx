import React from 'react'
import MainSectionStyle from "./MainSection.module.css"

export default function MainSection() {
  return (
    <>

      {/* SECTION 1 */}
      <div className={MainSectionStyle.FirstContainer}>
        <div className={MainSectionStyle.SecondContainer}>
          <h1>About Us</h1>
          <p>
            Careem's purpose is to simplify and improve the lives of people <br />
            and build an awesome organisation that inspires. <br />
            Learn more about our purpose, people and services.
          </p>
          <button>Read More</button>
        </div>

        <div className={MainSectionStyle.thirdContainer_img}>
          <img src="/MainSectionImages/CREAMPROIMG.png" alt="banner" />
        </div>
      </div>


      {/* SECTION 2 */}
      <div className={MainSectionStyle.body}>
        <div className={MainSectionStyle.FirstContainer1}>
          <div className={MainSectionStyle.thirdContainer_img1}>
            <img src="/MainSectionImages/creanimg2.png" alt="banner" />
          </div>

          <div className={MainSectionStyle.SecondContainer1}>
            <h1>Captains</h1>
            <p>
              Drive or deliver with Careem and earn with every ride. Choose 
              your own hours, enjoy amazing Captain rewards and get
              professional training
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>


    {/* section 3 */}
     <div className={MainSectionStyle.FirstContainer2}>
        <div className={MainSectionStyle.SecondContainer2}>
          <h1>Engineering at Careem</h1>
          <p>
            Careem is creating cutting-edge technology every day across <br />
            five tech sites in Europe and the MENAP region, in a mission <br />
            to build a lasting tech institution that inspires.
          </p>
          <button>Read More</button>
        </div>

        <div className={MainSectionStyle.thirdContainer_img2}>
          <img src="/MainSectionImages/creami_img3.png" alt="banner" />
        </div>
      </div>

      {/* Section 4 */}

      <div className={MainSectionStyle.FirstContainer3}>
        <div className={MainSectionStyle.thirdContainer_img3}>
          <img src="/MainSectionImages/creamimg4.png" alt="banner" />
        </div>

        <div className={MainSectionStyle.SecondContainer3}>
          <h1>Our social impact</h1>
          <p>
            We believe deeply in driving social and economic progress across <br />
            the region. We use our app to connect customers to the <br />
            communities that need the most support.
          </p>
          <button>Read More</button>
        </div>
      </div>

      {/* section 5 */}


       <div className={MainSectionStyle.body}>
        {/* 1 */}

<div className={MainSectionStyle.inlinecon}>

        <div className={MainSectionStyle.FirstContainer4}>
        <div className={MainSectionStyle.thirdContainer_img4}>
          <img src="/MainSectionImages/creimg5.png" alt="banner" />
        </div>

        <div className={MainSectionStyle.SecondContainer4}>
          <h1>Valentina's Day, made easy with cream</h1>
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
          <h1>Zero fees & member-only FX rates</h1>
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
          <h1>Our social impact</h1>
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

    </>
  );
}
