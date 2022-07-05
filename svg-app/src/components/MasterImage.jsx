//(Basic-)File created with https://react-svgr.com/
import React from 'react';

//import useInterval from "../hooks/useInterval";


const IOLinkMasterPic= ({ config }) => (
  <svg
    width="210mm"
    height="297mm"
    viewBox="0 0 210 297"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path id="a" d="M326.899 425.471h112.319v19.782H326.899z" />
      <path id="b" d="M326.899 425.471h112.319v19.782H326.899z" />
    </defs>
    <path
      style={{
        fill: "blue",
        fillOpacity: 0.14902,
        strokeWidth: 0.264583,
      }}
      d="M66 58.548h74.161v164.29H66z"
    />
    <circle
      style={{
        fill: "#000",
        fillOpacity: 0.14902,
        strokeWidth: 0.264583,
      }}
      cx={101.306}
      cy={101.306}
      r={11.532}
    />
    <circle
      style={{
        fill: config.Port2,
        fillOpacity: 0.14902,
        strokeWidth: 0.264583,
      }}
      cx={101.484}
      cy={154.355}
      r={11.532}
    />
    <path
      style={{
        fill: config.myLED,
        fillOpacity: 0.14902,
        strokeWidth: 0.264583,
      }}
      d="M82.323 84.097h6.387v6.742h-6.387zM112.839 83.919h6.387v6.742h-6.387zM84.097 136.435h6.387v6.742h-6.387zM111.774 136.435h6.387v6.742h-6.387z"
    />
    <text
      transform="matrix(.26458 0 0 .26458 6.092 54.705)"
      style={{
        whiteSpace: "pre",
        shapeInside: "url(#a)",
        fill: "#000",
        fillOpacity: 0.14902,
      }}
    >
      <tspan x={326.898} y={436.419}>
        {config.Port2Text}
      </tspan>
    </text>
    <text
      transform="matrix(.26458 0 0 .26458 5.937 1.48)"
      style={{
        whiteSpace: "pre",
        shapeInside: "url(#b)",
        fill: "#000",
        fillOpacity: 0.14902,
      }}
    >
      <tspan x={326.898} y={436.419}>
        {"hallo Port 1"}
      </tspan>
    </text>
  </svg>
)

export default IOLinkMasterPic
