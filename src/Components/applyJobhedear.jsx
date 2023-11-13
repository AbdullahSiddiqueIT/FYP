import React from 'react'
import logo from "../CSS/Imgs/Logo.png";
import "../CSS/ApplyForJob.css"

export default function applyJobhedear(props) {
  // function for toggle the hanburger Menu
 
  const MenuToggle = () => {
    
    document.querySelector(".hanburger").classList.toggle("change");
    document.querySelector(".burger-menu").classList.toggle("changetoflex");
  };
  return (
    <>
      <div className="header-main-div">
        <div className="nav-main-container">
          <div className="nav-left-part">
            <div className="nav-inner-left">
              <img src={logo} alt="logo-img" />
              <div className="nav-text">Job Hunt</div>
            </div>
            <div className="nav-inner-right">
              <button className="nav-left-btn">Find Jobs</button>
              <button className="nav-left-btn">Browse Companies</button>
            </div>
          </div>
          <div className="nav-right-part">
            <button className="nav-right-btn1">Sign Up</button>
            <span
              style={{
                color: "white",
                height: "1.5rem",
                marginTop: "0.5rem",
                borderRight: "2px solid white",
              }}
            ></span>
            <button className="nav-right-btn2">Post Job</button>
          </div>
          <div className="hanburger" onClick={MenuToggle}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </div>
        <div className="burger-menu">
          <div className="burger-menu-item ">Find Jobs</div>
          <div className="burger-menu-item ">Browse Companies</div>
          <div className="burger-menu-item ">Sign Up</div>
          <div className="burger-menu-item item-last">Post Job</div>
        </div>
        <div className="main-Search-container">
          <div className="search-text-section">
            <div className="apply-search-text1">{props.text1}</div>
            <div className="apply-search-text2">
            {props.text2}</div>
          </div>
         
        </div>
      </div>
    </>
  );
}
