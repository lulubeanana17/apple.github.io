import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "./media/applelogo.png";
import ScrollInfo from './function/ScrollInfo';
import SwitchIphone from "./SwitchingIphone";
import Techspecs from "./Techspecs";
import Homepage from "./Homepage";
import './Nav.css';
import { useEffect } from "react";

function Nav() {
  const scrollY = ScrollInfo(0);

  const toggleBtn = (event) => {
    event.preventDefault();
    const classEle = document.getElementById("menuBtn");
    const arrwoL = document.querySelector(".arrowLeft");
    const arrwoR = document.querySelector(".arrowRight");
    const drawer = document.querySelector(".drawingMenu");
    const navbarAni = document.querySelector(".navbarAni");
    const navbar = document.querySelector(".navbar2Container");

    classEle.classList.toggle("slideOn");
    if(document.querySelector(".slideOn")) {
      arrwoL.classList.add("ALOn");
      arrwoR.classList.add("AROn");
      drawer.classList.add("DOn");
      navbarAni.classList.add("navAv");
      navbar.classList.add("navbar");
    } else {
      arrwoL.classList.remove("ALOn");
      arrwoR.classList.remove("AROn");
      drawer.classList.remove("DOn");
      navbarAni.classList.remove("navAv");
      navbar.classList.remove("navbar");
    }
  }
  useEffect(()=> {
    if(document.querySelector(".slideOn")) {
    window.addEventListener("scroll", toggleBtn);
    }
  }, []);

  return (
    <Router>
      <div className="navbar1">
        <Link to={`/`}>
          <img src={Logo} alt="logo" className="homelogo" />
        </Link>
      </div>
      <div
        className="navbar2Container"
        id={scrollY > 99 ? "scrollSticky" : null}
      >
        <div className="navbar2">
          <div className="nav2left">
            <h3>iPhone 13</h3>
          </div>
          <div className="nav2right">
            <div className="drawingMenu">
            <Link to={"/"} className="overview">
              <h5>Overview</h5>
            </Link>
            <hr/>
            <a href="https://www.apple.com/iphone-13/switch/" className="switchtoiphone"><h5>Switching to iPhone</h5></a>
            
            <hr/>
            <a href="https://www.apple.com/iphone-13/specs/" className="techspecs"><h5>Tech Specs</h5></a>
            
            </div>
            <div id="menuBtn" onClick={toggleBtn}>
              <span className="arrowLeft"></span>
              <span className="arrowRight"></span>
            </div>
            <a href="https://www.apple.com/shop/buy-iphone/iphone-13" className="buy"><h5>Buy</h5></a>
          </div>
        </div>
        <div className="navbarAni"></div>
      </div>
      
        
      <Routes>
        <Route path={"/"} element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default Nav;
