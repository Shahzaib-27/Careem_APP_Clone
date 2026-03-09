import React from 'react'
import { BrowserRouter , Routes , Route } from "react-router-dom"

// import NavBar from "./Components/Nav/nav.jsx"
// import Footer from "./Components/Footer/Footer.jsx"

import NavLayout from "./Components/Layout/Layout.jsx"
import AboutUsPage from "./pages/AboutUs.jsx"
import CareemplusPage from "./pages/Careemplus.jsx"
import PartnersPage from "./pages/Partners.jsx"
import ServicesPage from "./pages/Services.jsx"

export default function App() {
return (
  <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavLayout/>} />  
      <Route path="/aboutus" element={<AboutUsPage/>} />  
      <Route path="/careemplus" element={<CareemplusPage/>} />  
      <Route path="/partners" element={<PartnersPage/>} />  
      <Route path="/services" element={<ServicesPage/>} />  
    </Routes>
   </BrowserRouter>
  </>
)
}
