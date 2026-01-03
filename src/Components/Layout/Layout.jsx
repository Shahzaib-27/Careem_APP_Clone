import React from 'react'

import NavData from "../Nav/nav.jsx"
import HeroData from "../heroSection/HeroSection.jsx"
import MainSecData from "../Main/MainSection.jsx"
import FooterData from "../Footer/Footer.jsx"

export default function Layout() {
  return (
    <div>
      <NavData/>
      <HeroData/>
      <MainSecData/>
      <FooterData/>
    </div>
  )
}
