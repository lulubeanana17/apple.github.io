import { useEffect, useState } from "react";

const ScrollInfo = (number) => {
  const [state, setState] = useState(0);

  const OnScroll = (event) => {
    event.preventDefault();
    const yValue = window.scrollY;
    
    if (number === 0) {
      setState(yValue);
    } else if (number === 1) {
      const layerY = document.querySelector(".firstInfo").getBoundingClientRect().y;
      if (layerY > 602 || layerY <= 2) {
        setState(0);
      } else if (
        (layerY <= 602 && layerY > 502) ||
        (layerY <= 102 && layerY > 2)
      ) {
        setState(0.3);
      } else if (
        (layerY <= 502 && yValue < 402) ||
        (layerY <= 202 && yValue > 102)
      ) {
        setState(0.7);
      } else if (layerY <= 402 && layerY > 202) {
        setState(1);
      }
    } else if (number === 2) {
      const layerY = document.querySelector(".secondInfo").getBoundingClientRect().y;
      if (layerY > 602 || layerY <= 2) {
        setState(0);
      } else if (
        (layerY <= 602 && layerY > 502) ||
        (layerY <= 102 && layerY > 2)
      ) {
        setState(0.3);
      } else if (
        (layerY <= 502 && yValue < 402) ||
        (layerY <= 202 && yValue > 102)
      ) {
        setState(0.7);
      } else if (layerY <= 402 && layerY > 202) {
        setState(1);
      }
    } else if (number === 3) {
      const layerY = document.querySelector(".thirdInfo").getBoundingClientRect().y;
      if (layerY > 602 || layerY <= 2) {
        setState(0);
      } else if (
        (layerY <= 602 && layerY > 502) ||
        (layerY <= 102 && layerY > 2)
      ) {
        setState(0.3);
      } else if (
        (layerY <= 502 && yValue < 402) ||
        (layerY <= 202 && yValue > 102)
      ) {
        setState(0.7);
      } else if (layerY <= 402 && layerY > 202) {
        setState(1);
      }
    } else if (number === 4) {
      const layerY = document.querySelector(".fourthInfo").getBoundingClientRect().y;
      if (layerY > 602 || layerY <= 2) {
        setState(0);
      } else if (
        (layerY <= 602 && layerY > 502) ||
        (layerY <= 102 && layerY > 2)
      ) {
        setState(0.3);
      } else if (
        (layerY <= 502 && yValue < 402) ||
        (layerY <= 202 && yValue > 102)
      ) {
        setState(0.7);
      } else if (layerY <= 402 && layerY > 202) {
        setState(1);
      }
    } else if (number === 5) {
      const layerY = document.querySelector(".subtitleContainer h3").getBoundingClientRect().y;
      if (layerY > 700) {
        setState(0);
      } else {
        setState(1);
      }
    } else if (number === 6) {
      const layerY = document.querySelector(".subtitleContainer h1").getBoundingClientRect().y;
      if (layerY > 540) {
        setState(0);
      } else {
        setState(1);
      }
    } else if (number === 7) {
      const layerY = document.querySelector(".subtitleContainer h1").getBoundingClientRect().y;
      if (layerY > 400) {
        setState(0);
      } else {
        setState(1);
      }
    } else if (number === 8) {
      const layerY = document.querySelector(".layer1Sec1").getBoundingClientRect().y;
      if (layerY > 750) {
        setState({
          opacity: 0,
          margin: 60,
        });
      } else if (layerY <= 750 && layerY > 650) {
        setState({
          opacity: 0.4,
          margin: 40,
        });
      } else if (layerY <= 650 && layerY > 550) {
        setState({
          opacity: 0.7,
          margin: 20,
        });
      } else {
        setState({
          opacity: 1,
          margin: 0,
        });
      }
    } else if (number === 9) {
      const layerY = document.querySelector(".layer1Sec2").getBoundingClientRect().y;
      if (layerY > 550) {
        setState({
          opacity: 0,
          margin: 60,
        });
      } else if (layerY <= 550 && layerY > 450) {
        setState({
          opacity: 0.4,
          margin: 40,
        });
      } else if (layerY <= 450 && layerY > 350) {
        setState({
          opacity: 0.7,
          margin: 20,
        });
      } else {
        setState({
          opacity: 1,
          margin: 0,
        });
      }
    } else if (number === 10) {
      const layerY = document.querySelector(".layer2Sec1Up").getBoundingClientRect().y;
      if (layerY > 710) {
        setState({
          opacity: 0,
          margin: 60,
        });
      } else if (layerY <= 710 && layerY > 610) {
        setState({
          opacity: 0.4,
          margin: 40,
        });
      } else if (layerY <= 610 && layerY > 510) {
        setState({
          opacity: 0.7,
          margin: 20,
        });
      } else {
        setState({
          opacity: 1,
          margin: 0,
        });
      }
    } else if (number === 11) {
      const layerY = document.querySelector(".layer2Sec2").getBoundingClientRect().y;
      if (layerY > 610) {
        setState({
          opacity: 0,
          margin: 60,
        });
      } else if (layerY <= 610 && layerY > 510) {
        setState({
          opacity: 0.4,
          margin: 40,
        });
      } else if (layerY <= 510 && layerY > 410) {
        setState({
          opacity: 0.7,
          margin: 20,
        });
      } else {
        setState({
          opacity: 1,
          margin: 0,
        });
      }
    } else if (number === 12) {
      const layerY = document.querySelector(".layer2Sec1Down").getBoundingClientRect().y;
      if (layerY > 780) {
        setState({
          opacity: 0,
          margin: 60,
        });
      } else if (layerY <= 780 && layerY > 680) {
        setState({
          opacity: 0.4,
          margin: 40,
        });
      } else if (layerY <= 680 && layerY > 580) {
        setState({
          opacity: 0.7,
          margin: 20,
        });
      } else {
        setState({
          opacity: 1,
          margin: 0,
        });
      }
    } else if (number === 13) {
      const layerY = document.querySelector(".layer1Sec1").getBoundingClientRect().y;
      const layerYY = document.querySelector(".layer2Sec1Down").getBoundingClientRect().y;
      const layerYYY = document.querySelector(".layer2Sec2").getBoundingClientRect().y;
      if(window.outerWidth > 426) {
      if (layerY > 150) {
        setState({
          position: "absolute",
          top: 0,
          padding: 200
        });
      } else if (layerY <= 150 && layerYY > 150) {
        setState({
          position: "fixed",
          top: 0,
          padding: 70
        });
      } else if (layerYY < 150) {
        setState({
          position: "absolute",
          bottom: 100,
          paddingBottom: 100
        });
      }
    } else {
      if (layerY > 300) {
        setState({
          opacity: 0,
          background: "#797979",
          position: "absolute",
          bottom: 0
        });
      } else if (layerY <= 300 && layerYYY > 256) {
        setState({
          opacity: 1,
          background: "#797979",
          position: "fixed",
          bottom: 0
        });
      } else if (layerYYY < 256) {
        setState({
          opacity: 0,
          background: "#797979",
          position: "absolute",
          bottom: 0
        });
      }
    }
    }
     else if(number === 14) {
      const layerY = document.querySelector(".iphone13Sec6").getBoundingClientRect().y;
      if(window.outerWidth > 426) {
      if(layerY > 344) {
        setState(300);
      } else if(layerY <= 344 && layerY > 244) {
        setState(250);
      } else if(layerY <= 244 && layerY > 144) {
        setState(200);
      } else {
        setState(192);
      }
    } else {
      if(layerY > 344) {
        setState(200);
      } else if(layerY <= 344 && layerY > 244) {
        setState(170);
      } else if(layerY <= 244 && layerY > 144) {
        setState(120);
      } else {
        setState(101);
      }
    }
    } else if(number === 15) {
      const layerY = document.querySelector(".iphone13Sec6").getBoundingClientRect().y;
      if(layerY > 454) {
        setState({
          marginTop: 500,
          marginLeft: 1200
        });
      } else if(layerY <= 454 && layerY > 400) {
        setState({
          marginTop: 400,
          marginLeft: 1100
        });
      } else if(layerY <= 400 && layerY > 350) {
        setState({
          marginTop: 300,
          marginLeft: 1000
        });
      } else if(layerY <= 350 && layerY > 300) {
        setState({
          marginTop: 250,
          marginLeft: 750
        });
      } else if(layerY <= 300 && layerY > 250) {
        setState({
          marginTop: 200,
          marginLeft: 400
        });
      } else if(layerY <= 250 && layerY > 200) {
        setState({
          marginTop: 150,
          marginLeft: 200
        });
      } else if(layerY <= 200 && layerY > 150) {
        setState({
          marginTop: 100,
          marginLeft: 100
        });
      } else {
        setState({
          marginTop: 0,
          marginLeft: 0
        });
      }
    } 
  };

  useEffect(() => {
    window.addEventListener("scroll", OnScroll);
    return () => window.removeEventListener("scroll", OnScroll);
  }, []);

  return state;
};

export default ScrollInfo;
