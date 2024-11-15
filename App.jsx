import React, { useState } from "react";
import Navbar from "./Components/Nav-bar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Friends from "./Components/Friends/Friends.jsx";



const App = ()=> {
 

  return(
    <>
      <div>
        <Navbar/>
        <Hero/>
          <div className="container">
            <Title title="OUR PROGRAMs" subTitle="What we Offer"/>
            <Programs/>
            <About />
            <Title title="Gallery" subTitle="Campus Photos"/>
            <Campus/>
            <Title title="What Students Says" subTitle="TESTIMONIALS"/>
            <Testimonials/>
            <Title title="Get in touch" subTitle="Contact Us"/>
            <Contact/>
            <Footer/>
            <Friends/>
            </div>
        </div>
      
     

    </>
  )


}
export default App