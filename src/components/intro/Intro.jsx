import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

let isLoading = true;
export default function Intro() {

  const textRef = useRef(null);

  useEffect(()=>{
    if (textRef.current && isLoading) {
      isLoading = false;
    init(textRef.current, {
      showCursor: true, 
      backDelay:  2000, 
      backSpeed:  60,
      strings: ["Developper","Designer"],
    });
  }
  },[]);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png"  alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There, I'm</h2>
          <h1>AMOR Zakaria</h1>
          <h3>Front End <span ref={textRef} /></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
