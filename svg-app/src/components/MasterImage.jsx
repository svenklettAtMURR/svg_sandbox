import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as IOL_Master_Pic } from "../IOL_Master.svg";
import useInterval from "../hooks/useInterval";


// If working: Auslagern
function FindChildElementById(obj, elementId) {
  // var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  // text.setAttribute("x", 1);
  // text.setAttribute("y", 1);
  // text.setAttribute("width", 50);
  // text.style.fill = "red";
  // text.style.fontFamily = "Verdana";
  // text.style.fontSize = "10";
  // text.innerHTML = "Some txt";

  let matchingElement = null;
  Object.keys(obj).forEach(function (element, index) {
    if (obj[index].id === elementId) {
      console.log("match: ", obj[index]);
      matchingElement = obj[index];
      // obj[index].appendChild(text);
    }
  });

  return matchingElement;
}

/**
 * this page is under construction and only used to demonstrate simplest possible functions:
 *  - change color of an LED cyclic
 *  - add/edit an textfield of an svg object
 *
 * @returns master image
 */
const MasterImage = () => {
  // led 1
  const [led_status_p1, setLed_status_p1] = useState(null);
  const svgRef = useRef(null);

  // get the LED elements once
  useEffect(() => {
    var led_status_p1 = FindChildElementById(svgRef.current.children, "LED_status_Port1");
    //led_status_p1.style.fill = "red";
    setLed_status_p1(led_status_p1);
  }, []);

  // this interval is used to update status of the LEDs
  useInterval(() => {
    led_status_p1.style.fill = led_status_p1.style.fill === "none" ? "red" : "none";
  }, [1000]);

  return (
    <>
      <IOL_Master_Pic height={"28%"} ref={svgRef} />
    </>
  );
};

export default MasterImage;
