import React, { useEffect, useState } from "react";
import Stars from './Stars'

const MouseResponsive = () => {
  const obj = {
    style:{
      top:0+'px',
      left:0+'px'
    }
  }
  const [main, setMain] = useState(obj);

  const mainHandler = () => {
    setMain(document.getElementById("container"));
  };

  let prevClientX = 0;
  let prevClientY = 0;
  let movementX = 0;
  let movementY = 0;

  const increment = (num) => num + 0.8;
  const decrement = (num) => num - 0.8;

  const initTop = -250;
  const initLeft = -window.innerWidth / 8;


  useEffect(() => {
    mainHandler();
    main.style.top = initTop + "px";
    main.style.left = initLeft + "px";
    window.addEventListener("mousemove", function (event) {
      const x = event.clientX;
      const y = event.clientY;
      const right = x > prevClientX;
      const left = x < prevClientX;
      const up = y > prevClientY;
      const down = y < prevClientY;

      if (right) {
        movementX = increment(movementX);
      }
      if (left) {
        movementX = decrement(movementX);
      }
      if (up) {
        movementY = increment(movementY);
      }
      if (down) {
        movementY = decrement(movementY);
      }

      main.style.left = initLeft + movementX + "px";
      main.style.top = initTop + movementY + "px";

      prevClientX = x
      prevClientY = y
    })
    // window.addEventListener("mouseon",function(event){
    //   main.style.top = 0 + "px";
    //   main.style.left = 0 + "px";
    // })
  });

  return (
    <div id="main">
      <div id="container" style={{position:"absolute", height:"100vh"}}>
         <Stars/>
      </div>
    </div>

    
  );
};
export default MouseResponsive;
