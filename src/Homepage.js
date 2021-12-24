import React, { useEffect, useState } from "react";
import NavbarFade from "./function/navbarFade";
import ScrollInfo from "./function/ScrollInfo";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Homepage.css";
import iphone13Sec1Img1 from "./media/iphone13Sec1Img1.jpg";
import iphone13Sec1Img2 from "./media/iphone13Sec1Img2.jpg";
import iphone13Sec2Img1 from "./media/iphone13Sec2Img1.png";
import iphone13Sec2Img2 from "./media/iphone13Sec2Img2.png";
import iphone13Sec2Img3 from "./media/iphone13Sec2Img3.png";
import iphone13Sec2Img4 from "./media/iphone13Sec2Img4.png";
import iphone13Sec2Img5 from "./media/iphone13Sec2Img5.jpg";
import iphone13Sec3Part1Img1 from "./media/iphone13Sec3Part1Img1.jpg";
import iphone13Sec3Part1Img2 from "./media/iphone13Sec3Part1Img2.jpg";
import iphone13Sec3Part1Img3 from "./media/iphone13Sec3Part1Img3.jpg";
import iphone13Sec3Part1Img4 from "./media/iphone13Sec3Part1Img4.jpg";
import iphone13Sec3Part1Img5 from "./media/iphone13Sec3Part1Img5.jpg";
import iphone13Sec3Part1Img6 from "./media/iphone13Sec3Part1Img6.jpg";
import iphone13Sec3Part2Img1 from "./media/iphone13Sec3Part2Img1.jpg";
import iphone13Sec3Part2Img2 from "./media/iphone13Sec3Part2Img2.jpg";
import iphone13Sec3Part2Img3 from "./media/iphone13Sec3Part2Img3.jpg";
import iphone13Sec3Part2Img4 from "./media/iphone13Sec3Part2Img4.jpg";
import iphone13Sec3Part2Img5 from "./media/iphone13Sec3Part2Img5.jpg";
import iphone13Sec3Part2Img6 from "./media/iphone13Sec3Part2Img6.jpg";
import iphone13Sec3Part3Img1 from "./media/iphone13Sec3Part3Img1.jpg";
import iphone13Sec3Part3Img2 from "./media/iphone13Sec3Part3Img2.jpg";
import iphone13Sec3Part3Img3 from "./media/iphone13Sec3Part3Img3.jpg";
import iphone13Sec3Part3Img4 from "./media/iphone13Sec3Part3Img4.jpg";
import iphone13Sec3Part3Img5 from "./media/iphone13Sec3Part3Img5.jpg";
import iphone13Sec3Part3Img6 from "./media/iphone13Sec3Part3Img6.jpg";
import iphone13Sec3Part4Img1 from "./media/iphone13Sec3Part4Img1.jpg";
import iphone13Sec3Part4Img2 from "./media/iphone13Sec3Part4Img2.jpg";
import iphone13Sec3Part4Img3 from "./media/iphone13Sec3Part4Img3.jpg";
import iphone13Sec3Part4Img4 from "./media/iphone13Sec3Part4Img4.jpg";
import iphone13Sec3Part4Img5 from "./media/iphone13Sec3Part4Img5.jpg";
import iphone13Sec3Part4Img6 from "./media/iphone13Sec3Part4Img6.jpg";
import iphone13Sec3Part5Img1 from "./media/iphone13Sec3Part5Img1.jpg";
import iphone13Sec3Part5Img2 from "./media/iphone13Sec3Part5Img2.jpg";
import iphone13Sec3Part5Img3 from "./media/iphone13Sec3Part5Img3.jpg";
import iphone13Sec3Part5Img4 from "./media/iphone13Sec3Part5Img4.jpg";
import iphone13Sec3Part5Img5 from "./media/iphone13Sec3Part5Img5.jpg";
import iphone13Sec3Part5Img6 from "./media/iphone13Sec3Part5Img6.jpg";
import iphone13Sec4Img1 from "./media/iphone13Sec4Img1.jpg";
import iphone13Sec4Img2 from "./media/iphone13Sec4Img2.jpg";
import iphone13Sec4Img3 from "./media/iphone13Sec4Img3.jpg";
import iphone13Sec6Img1 from "./media/iphone13Sec6Img1.png";
import iphone13Sec6Img2 from "./media/iphone13Sec6Img2.png";
import iphone13Sec6Img3 from "./media/iphone13Sec6Img3.png";
import iphone13Sec6Img4 from "./media/iphone13Sec6Img4.png";
import iphone13Sec6Img5 from "./media/iphone13Sec6Img5.png";
import iphone13Sec6Img6 from "./media/iphone13Sec6Img6.png";
import iphone13Sec6Img7 from "./media/iphone13Sec6Img7.png";
import iphone13Sec6Img8 from "./media/iphone13Sec6Img8.png";
import iphone13Sec6Img9 from "./media/iphone13Sec6Img9.png";
import iphone13Sec6Img10 from "./media/iphone13Sec6Img10.png";
import iphone13Sec6Img11 from "./media/iphone13Sec6Img11.png";
import iphone13Sec6Img12 from "./media/iphone13Sec6Img12.png";
import iphone13Sec6Img13 from "./media/iphone13Sec6Img13.png";
import iphone13Sec6Img14 from "./media/iphone13Sec6Img14.png";
import iphone13Sec6Img16 from "./media/iphone13Sec6Img16.png";
import iphone13Sec6Img17 from "./media/iphone13Sec6Img17.png";
import iphone13Sec6Img18 from "./media/iphone13Sec6Img18.png";

const colorArray = [
  {
    buttonColor: "#faddd7",
    color: "#fec2eb",
    background: "#35283c",
    layer1Sec1Let: "Pink",
    layer1Sec1Img: iphone13Sec3Part1Img1,
    layer1Sec2Img: iphone13Sec3Part1Img2,
    layer2Sec1Img: iphone13Sec3Part1Img3,
    layer2Sec1Img2: iphone13Sec3Part1Img4,
    layer2Sec1DownImg: iphone13Sec3Part1Img6,
    layer2Sec2Img: iphone13Sec3Part1Img5,
  },
  {
    buttonColor: "#276787",
    color: "#b6ff9b",
    background: "#0c3139",
    layer1Sec1Let: "Blue",
    layer1Sec1Img: iphone13Sec3Part2Img1,
    layer1Sec2Img: iphone13Sec3Part2Img2,
    layer2Sec1Img: iphone13Sec3Part2Img3,
    layer2Sec1Img2: iphone13Sec3Part2Img4,
    layer2Sec1DownImg: iphone13Sec3Part2Img6,
    layer2Sec2Img: iphone13Sec3Part2Img5,
  },
  {
    buttonColor: "#232a31",
    color: "#ffa9ab",
    background: "#12203b",
    layer1Sec1Let: "Midnight",
    layer1Sec1Img: iphone13Sec3Part3Img1,
    layer1Sec2Img: iphone13Sec3Part3Img2,
    layer2Sec1Img: iphone13Sec3Part3Img3,
    layer2Sec1Img2: iphone13Sec3Part3Img4,
    layer2Sec1DownImg: iphone13Sec3Part3Img6,
    layer2Sec2Img: iphone13Sec3Part3Img5,
  },
  {
    buttonColor: "#faf6f2",
    color: "#72e5ce",
    background: "#2e2e3a",
    layer1Sec1Let: "Starlight",
    layer1Sec1Img: iphone13Sec3Part4Img1,
    layer1Sec2Img: iphone13Sec3Part4Img2,
    layer2Sec1Img: iphone13Sec3Part4Img3,
    layer2Sec1Img2: iphone13Sec3Part4Img4,
    layer2Sec1DownImg: iphone13Sec3Part4Img6,
    layer2Sec2Img: iphone13Sec3Part4Img5,
  },
  {
    buttonColor: "#bf0013",
    color: "#ffb44c",
    background: "#3e1921",
    layer1Sec1Let: "Red",
    layer1Sec1Img: iphone13Sec3Part5Img1,
    layer1Sec2Img: iphone13Sec3Part5Img2,
    layer2Sec1Img: iphone13Sec3Part5Img3,
    layer2Sec1Img2: iphone13Sec3Part5Img4,
    layer2Sec1DownImg: iphone13Sec3Part5Img6,
    layer2Sec2Img: iphone13Sec3Part5Img5,
  },
];

function Homepage() {
  const fadein = NavbarFade();
  const [number, setNumber] = useState(0);
  const InfoOpacOne = ScrollInfo(1);
  const InfoOpacTwo = ScrollInfo(2);
  const InfoOpacThree = ScrollInfo(3);
  const InfoOpacFour = ScrollInfo(4);
  const InfoOpacFive = ScrollInfo(5);
  const InfoOpacSix = ScrollInfo(6);
  const InfoOpacSeven = ScrollInfo(7);
  const IntroHomeOne = ScrollInfo(8);
  const IntroHomeTwo = ScrollInfo(9);
  const IntroHomeThree = ScrollInfo(10);
  const IntroHomeFour = ScrollInfo(11);
  const IntroHomeFive = ScrollInfo(12);
  const [index, setIndex] = useState(0);
  const scrollbarColor = ScrollInfo(13);
  const ios15 = ScrollInfo(14);
  const iphone13Sec6Moving = ScrollInfo(15);

  const OnClick = (event) => {
    setIndex(event.target.id);

    if(window.outerWidth > 426) {
    const idAll = document.getElementsByClassName("buttonLiner");
    for (let i = 0; i < 5; i++) {
      idAll[i].classList.remove("chosenButton");
    }
    const idName = document.getElementById("buttonLiner" + event.target.id);
    idName.classList.add("chosenButton");
  }
  };

  useEffect(() => {
    setTimeout(() => {
      setNumber(1);
    }, 2000);
  }, []);
  return (
    <>
      <div className="nav3tohome">
        <div className="navbar3" {...fadein}>
          <p style={{ color: number === 0 ? "#fff" : "#787879" }}>
            Save on your new iPhone with special carrier deals at Apple.
          </p>
          <a
            style={{ color: number === 0 ? "#fff" : "#579add" }}
            href="https://www.apple.com/shop/buy-iphone/carrier-offers"
            className="findyourdeal"
          >
            <span>Find Your deal</span>
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className="home">
          <img
            src={window.outerWidth > 426? iphone13Sec1Img1 : iphone13Sec1Img2}
            alt="homeimage1"
            className="iphone13Sec1Img1"
          />
          <div className="iphone13Sec2">
            <div className="infoContainer">
              <div className="firstInfo" style={{ opacity: InfoOpacOne }}>
                <img src={iphone13Sec2Img1} alt="image1" />
                <p>
                  Our most advanced
                  <br />
                  dual-camera system ever.
                </p>
              </div>
              <div className="secondInfo" style={{ opacity: InfoOpacTwo }}>
                <img src={iphone13Sec2Img2} alt="image2" />
                <p>
                  Durability that's front and
                  <br />
                  center.And edge to edge.
                </p>
              </div>
              <div className="thirdInfo" style={{ opacity: InfoOpacThree }}>
                <img src={iphone13Sec2Img3} alt="image3" />
                <p>
                  A lightning-fast chip
                  <br />
                  that leaves the
                  <br />
                  competition behind.
                </p>
              </div>
              <div className="fourthInfo" style={{ opacity: InfoOpacFour }}>
                <img src={iphone13Sec2Img4} alt="image4" />
                <p>
                  A huge leap in battery life
                  <br />
                  you'll notice every day.
                </p>
              </div>
            </div>
            <img
              src={iphone13Sec2Img5}
              alt="homeimage2"
              className="iphone13Sec2Img5"
            />
            <div className="subtitleContainer">
              <h3
                style={{
                  opacity: InfoOpacFive === 0 ? "0" : "1",
                  top: InfoOpacFive === 0 ? "40px" : "0",
                }}
              >
                iPhone 13
              </h3>
              <h1
                style={{
                  opacity: InfoOpacSix === 0 ? "0" : "1",
                  top: InfoOpacSix === 0 ? "40px" : "0",
                }}
              >
                Your new
                <br />
                superpower.
              </h1>
              <div
                className="subTitlittleCon"
                style={{
                  opacity: InfoOpacSeven === 0 ? "0" : "1",
                  top: InfoOpacSeven === 0 ? "40px" : "0",
                }}
              >
                <p className="subtitleprice">
                  From $29.12/mo. for 24 mo. or $699 before trade-in
                </p>
                <div className="subtitleMedia">
                  <a
                    href="https://youtu.be/m43rh-pI0P0"
                    className="watchthefilm"
                  >
                    <p>Watch the film</p>
                    <i class="far fa-play-circle"></i>
                  </a>
                  <a
                    href="https://www.apple.com/apple-events/september-2021/"
                    className="watchtheevent"
                  >
                    <p>Watch the event</p>
                    <i class="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="iphone13Sec3">
        <div
          className="scrollbar"
          style={{
            opacity: scrollbarColor.opacity,
            backgroundColor: scrollbarColor.background,
            position: scrollbarColor.position,
            top: scrollbarColor.top,
            bottom: scrollbarColor.bottom,
            paddingTop: scrollbarColor.padding,
            paddingBottom: scrollbarColor.paddingBottom,
          }}
        >
          {colorArray.map((section, index) => (
            <div id={"buttonLiner" + index} className="buttonLiner">
              <button
                onClick={OnClick}
                style={{ backgroundColor: section.buttonColor }}
                className="buttonScroll"
                id={index}
              ></button>
            </div>
          ))}
        </div>
        <div className="iphone13Sec3Showcase">
          <div className="showcaseLayer1">
            <div
              className="layer1Sec1"
              style={{
                opacity: IntroHomeOne.opacity,
                top: IntroHomeOne.margin,
                background: colorArray[index].background,
              }}
            >
              <h3>
                <span style={{ color: colorArray[index].color }}>New</span>
                <br />
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    classNames="fade"
                    addEndListener={(node, done) => {
                      node.addEventListener("transitionend", done, false);
                    }}
                    key={colorArray[index].layer1Sec1Let}
                  >
                    <div className="layer1Sec1Text">
                      {colorArray[index].layer1Sec1Let}
                    </div>
                  </CSSTransition>
                </SwitchTransition>
                <br />
                finish
              </h3>
              <div
                className="layer1Sec1Img"
                style={{
                  backgroundImage:
                    "url(" + colorArray[index].layer1Sec1Img + ")",
                }}
              ></div>
            </div>
            <div
              className="layer1Sec2"
              style={{
                opacity: IntroHomeTwo.opacity,
                top: IntroHomeTwo.margin,
                background: colorArray[index].background,
              }}
            >
              <div
                className="layer1Sec2img1"
                style={{
                  backgroundImage:
                    "url(" + colorArray[index].layer1Sec2Img + ")",
                }}
              ></div>

              <div className="layer1Sec2Down">
                <img
                  className="layer1Sec2img2"
                  src="https://www.apple.com/v/iphone-13/d/images/overview/design/icon_ceramic_shield__djb87ha8lqc2_large_2x.png"
                  alt="layer1sec2image2"
                />
                <h3>
                  Ceramic Shield,
                  <br />
                  <span style={{ color: colorArray[index].color }}>
                    tougher
                  </span>{" "}
                  than any
                  <br />
                  smartphone glass
                </h3>
              </div>
            </div>
          </div>
          <div className="showcaseLayer2">
            <div className="layer2Sec1">
              <div
                className="layer2Sec1Up"
                style={{
                  opacity: IntroHomeThree.opacity,
                  top: IntroHomeThree.margin,
                  background: colorArray[index].background,
                }}
              >
                <div className="layer2Sec1UpUp">
                  <div className="iphone13">
                    <h3>iPhone 13</h3>
                    <div
                      className="iphone13Img"
                      style={{
                        backgroundImage:
                          "url(" + colorArray[index].layer2Sec1Img + ")",
                      }}
                    ></div>

                    <h2 style={{ color: colorArray[index].color }}>6.1"</h2>
                  </div>
                  <div className="iphone13mini">
                    <h3>iPhone 13 mini</h3>
                    <div
                      className="iphone13miniImg"
                      style={{
                        backgroundImage:
                          "url(" + colorArray[index].layer2Sec1Img2 + ")",
                      }}
                    ></div>

                    <h2 style={{ color: colorArray[index].color }}>5.4"</h2>
                  </div>
                </div>
                <h2 className="layer2Sec1UpDown">Super Retina XDR display</h2>
              </div>
              <div
                className="layer2Sec1Down"
                style={{
                  opacity: IntroHomeFive.opacity,
                  top: IntroHomeFive.margin,
                  background: colorArray[index].background,
                }}
              >
                <div
                  className="layer2Sec1DownImg"
                  style={{
                    backgroundImage:
                      "url(" + colorArray[index].layer2Sec1DownImg + ")",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="layer2Sec2"
              style={{
                opacity: IntroHomeFour.opacity,
                top: IntroHomeFour.margin,
                background: colorArray[index].background,
              }}
            >
              <h3>
                <span style={{ color: colorArray[index].color }}>Durable</span>
                <br />
                flat-edge
                <br />
                design
              </h3>
              <div
                className="layer2Sec2Img"
                style={{
                  backgroundImage:
                    "url(" + colorArray[index].layer2Sec2Img + ")",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="iphone13Sec4">
        <div className="iphone13Sec4Part1">
          <h3>
            How did we get
            <br />
            such a{" "}
            <span>
              huge
              <br />
              camera upgrade
            </span>
            <br />
            to fit?
          </h3>
          <div
            className="iphone13Sec4Part1Img"
            style={{ backgroundImage: "url(" + iphone13Sec4Img1 + ")" }}
          >
            <h5>By thinking diagonally</h5>
          </div>
        </div>
        <div className="iphone13Sec4Part2">
          <div className="part2Left">
            <p>
              we designed a totally new
              <br />
              architecture and turned the
              <br />
              lenses 45 degrees to fit in
              <br />
              our best dual-camera
              <br />
              system ever - with its
              <br />
              biggest wide camera sensor.
              <br />
              We also made room for our
              <br />
              sensor-shift optical image
              <br />
              stabilization. And we
              <br />
              equipped the Ultra Wide
              <br />
              camera with a faster sensor.
            </p>
            <h5>
              New Ultra Wide
              <br />
              camera{" "}
              <span>
                reveals more
                <br />
                detail
              </span>
              in the dark
              <br />
              areas of your photos
            </h5>
            <h5>
              New Wide camera
              <br />
              <span>
                captures 47% more
                <br />
                light
              </span>
              for better
              <br />
              photos and videos
            </h5>
            <h5>
              New sensor-shift
              <br />
              optical image
              <br />
              stabilization{" "}
              <span>
                keeps
                <br />
                shots steady even
                <br />
                when you're not
              </span>
            </h5>
          </div>
          <img src={iphone13Sec4Img2} alt="iphone13Sec4Img2" />
        </div>
        <div className="iphone13Sec4Part3">
          <div className="part3Left">
            <h3>
              It even fits in
              <br />
              iPhone 13 <span>mini</span>
            </h3>
          </div>
          <img src={iphone13Sec4Img3} alt="iphone13Sec4Img3" />
        </div>
      </div>
      <div className="iphone13Sec6">
        <div className="sec6Layer1">
          <div className="gridImg">
            <img
              src={iphone13Sec6Img1}
              alt="iphone13Sec6Img1"
              className="rotated"
              style={{ marginTop: -iphone13Sec6Moving.marginTop }}
            />
          </div>
          <div className="gridImg"></div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img2}
              alt="iphone13Sec6Img2"
              className="unrotated"
              style={{ marginTop: -iphone13Sec6Moving.marginTop }}
            />
          </div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img3}
              alt="iphone13Sec6Img3"
              className="unrotated"
              style={{ marginTop: -iphone13Sec6Moving.marginTop }}
            />
          </div>

          <div className="gridImg">
            <img
              src={iphone13Sec6Img4}
              alt="iphone13Sec6Img4"
              className="rotated"
              style={{ marginLeft: iphone13Sec6Moving.marginLeft }}
            />
          </div>
          <div className="gridImg"></div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img5}
              alt="iphone13Sec6Img5"
              className="unrotated"
              id="cutHalf"
              style={{ marginLeft: iphone13Sec6Moving.marginLeft }}
            />
          </div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img6}
              alt="iphone13Sec6Img6"
              className="unrotated"
              style={{ marginLeft: iphone13Sec6Moving.marginLeft }}
            />
          </div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img7}
              alt="iphone13Sec6Img7"
              className="unrotated"
              style={{ marginLeft: iphone13Sec6Moving.marginLeft }}
            />
          </div>
        </div>
        <div className="sec6Layer2">
          <div className="gridImg"></div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img9}
              alt="iphone13Sec6Img9"
              className="unrotated"
              style={{ marginTop: -iphone13Sec6Moving.marginTop }}
            />
          </div>

          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImg" id="ios15">
            <img
              src={iphone13Sec6Img8}
              alt="iphone13Sec6Img8"
              className="ios15"
              style={{ width: ios15, height: ios15 }}
            />
          </div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img12}
              alt="iphone13Sec6Img12"
              className="unrotated"
              style={{ marginTop: iphone13Sec6Moving.marginTop }}
            />
          </div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img13}
              alt="iphone13Sec6Img13"
              className="unrotated"
              style={{ marginTop: iphone13Sec6Moving.marginTop }}
            />
          </div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
        </div>
        <div className="sec6Layer3">
          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img10}
              alt="iphone13Sec6Img10"
              className="unrotated"
              style={{ marginLeft: -iphone13Sec6Moving.marginLeft }}
            />
          </div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img11}
              alt="iphone13Sec6Img11"
              className="rotated"
              style={{ marginLeft: -iphone13Sec6Moving.marginLeft }}
            />
          </div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img14}
              alt="iphone13Sec6Img14"
              className="unrotated"
              style={{ marginTop: iphone13Sec6Moving.marginTop }}
            />
          </div>
          <div className="gridImg"></div>
        </div>
        <div className="sec6Layer4">
          <div className="gridImg">
            <img
              src={iphone13Sec6Img18}
              alt="iphone13Sec6Img18"
              className="rotated"
            />
          </div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImgBig">
            <h3>In tough. In the moment.</h3>
            <p>
              iOS 15 lets you keep the conversation going while sharing movies,
              music, or
              <br />
              whatever's on your screen right in FaceTime. Stay in the zone by
              filtering out any
              <br />
              notifications that aren't relevant to the task at hand. And
              interact with text in
              <br />
              images to quickly send email, make calls, get directions, and
              more.
            </p>
            <a href="https://www.apple.com/ios/ios-15/">
              Learn more about iOS 15 <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
        </div>
        <div className="sec6Layer5">
          <div className="gridImg"></div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img16}
              alt="iphone13Sec6Img16"
              className="rotated"
            />
          </div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
          <div className="gridImg">
            <img
              src={iphone13Sec6Img17}
              alt="iphone13Sec6Img17"
              className="unrotated"
              id="cutHalf"
            />
          </div>
          <div className="gridImg"></div>
          <div className="gridImg"></div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
