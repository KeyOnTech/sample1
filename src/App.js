import React, { useState, useEffect } from "react";


// 8a -- scroll reveal --- cool but not really needed
import scrollreveal from 'scrollreveal';
// 8a -- scroll reveal --- cool but not really needed


import ScrollToTop from './components/HomePage/ScrollToTop';
import NavBar from './components/NavBar/Navbar';
import Home from './components/HomePage/Home';
import Free from './components/HomePage/Free';
import Clients from './components/HomePage/Clients';
import SuperRare from './components/HomePage/SuperRare';
import Release from './components/HomePage/Release';
import Like from './components/HomePage/Like';
import SignUp from './components/HomePage/SignUp';
import Footer from './components/HomePage/Footer';

import "./scss/index.scss";

export default function App() {


  // 8a -- scroll reveal --- cool but not really needed
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal ({
          origin: "bottom",
          distance: "80px",
          duration: 2000,
          reset: false,
      });
      sr.reveal (`nav,.home,.free,.clients,.super-rare,.release,.like,.signup,footer`, { interval: 500 } );
    };
    registerAnimations();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].getElementsByClassName.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 500);
  // 8a -- scroll reveal --- cool but not really needed




  // const [theme, setTheme] = useState("dark");
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "dark" 
    ? 
      setTheme("light") 
    : 
      setTheme("dark") 
    ;
  };

  return (
    <div className="app-container" data-theme={theme} >


{/* 
# Github pages steps
https://www.youtube.com/watch?v=2hM5viLMJpA

# Starter Base
https://www.youtube.com/watch?v=up60it73iqU&t=5251s 
*/}


      <ScrollToTop /> 
      <NavBar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
    </div>
  );
}
