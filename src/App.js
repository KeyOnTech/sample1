// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// // 8a -- scroll reveal --- cool but not really needed
// import scrollreveal from 'scrollreveal';
// // 8a -- scroll reveal --- cool but not really needed


import Layout from './pages/Layout/Layout';
import Home from './pages/HomePage/Home';

import NoPage from './pages/404Page/404-page';

import NFTPage1 from "./pages/NFTPage1/nft-page-1";
import NFTPage2 from "./pages/NFTPage2/nft-page-2";


import "./scss/index.scss";

export default function App() {


  // // 8a -- scroll reveal --- cool but not really needed
  // useEffect(() => {
  //   const registerAnimations = () => {
  //     const sr = scrollreveal ({
  //         origin: "bottom",
  //         distance: "80px",
  //         duration: 2000,
  //         reset: false,
  //     });
  //     sr.reveal (`nav,.home,.free,.clients,.super-rare,.release,.like,.signup,footer`, { interval: 500 } );
  //   };
  //   registerAnimations();
  // }, []);

  // window.setTimeout(() => {
  //   const home = document.getElementsByClassName("home");
  //   home[0].getElementsByClassName.transform = "none";
  //   const nav = document.getElementsByTagName("nav");
  //   nav[0].style.transform = "none";
  // }, 500);
  // // 8a -- scroll reveal --- cool but not really needed




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

      {/* <BrowserRouter> */}
      <BrowserRouter basename="/websample1">
        <Routes>
          
          {/* <Route path="/websample1" element={<Layout />}> */}
          <Route path="/" element={<Layout changeTheme={changeTheme} theme={theme} />}>
          {/* <Route path="/" element={<Home changeTheme={changeTheme} theme={theme} />}> */}

              <Route index element={<Home changeTheme={changeTheme} theme={theme} />} />
              <Route path="nft1" element={<NFTPage1 />} />
              <Route path="nft2" element={<NFTPage2 />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}



// {/* 
// # Github pages steps
// https://www.youtube.com/watch?v=2hM5viLMJpA

// # Starter Base
// https://www.youtube.com/watch?v=up60it73iqU&t=5251s 
// */}
