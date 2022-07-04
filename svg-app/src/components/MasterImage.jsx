import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as IOLMasterPic } from "../IOL_Master.svg";
import useInterval from "../hooks/useInterval";


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
    //var lsp1 = FindChildElementById(svgRef.current.children, "LED_status_Port1");
    //var lsp1 = IOLMasterPic.layer1.LED_status_Port1;
    //setLed_status_p1(lsp1);
  }, []);

  // this interval is used to update status of the LEDs
  useInterval(() => {
    //led_status_p1.style.fill = "red";
    //led_status_p1.style.fill = led_status_p1.style.fill === "none" ? "red" : "none";
  }, [1000]);

  return (
    <>
      <IOLMasterPic height={"28%"} ref={svgRef} />
    </>
  );
};


export default MasterImage;


// If working: Auslagern
function FindChildElementById(obj, elementId) {

  let matchingElement = null;
  Object.keys(obj).forEach(function (element, index) {
    if (obj[index].id === elementId) {
      console.log("match: ", obj[index]);
      matchingElement = obj[index];
      // obj[index].appendChild(text);
    }
  });

  if (matchingElement == null) {
    console.log("ACHTUNG Element nicht gefunden: ", matchingElement)
  }

  return matchingElement;
}