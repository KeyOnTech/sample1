import React from 'react'
import home from "../../assets/nft-2.png";

export default function TopSection() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">
            Launching Soon
          </p>
          <h1 className="title">
            An NFT like no other
          </h1>
          <p className="description">
            Don't miss out on the release of our new NFT.  Sign up below to receive updates when we go live.
          </p>
          <p className="description">


            Start Here
            1.25.0 - animations
            -- fix home css the image position is wrong too
            -- fix early bird images are wrong too


          </p>
          <button>
            Sign Up
          </button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
