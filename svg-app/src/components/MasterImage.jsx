//(Basic-)File created with https://react-svgr.com/
//Important:
//DISABLE "SVGO" which optimize SVG code before transforming it into a component!
//(SVGO removes necessary ids from the svg)
import React from 'react';

//import useInterval from "../hooks/useInterval";


const IOLinkMasterPic= ({ config }) => (
  <svg
    width="210mm"
    height="297mm"
    viewBox="0 0 210 297"
    id="svg5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs id="defs2">
      <rect
        x={326.89865}
        y={425.47117}
        width={112.31902}
        height={19.78156}
        id="rect457"
      />
      <rect
        x={323.21057}
        y={425.13589}
        width={182.39268}
        height={29.504699}
        id="rect401"
      />
      <rect
        x={326.89865}
        y={425.47116}
        width={112.31902}
        height={19.781561}
        id="rect457-8"
      />
      <rect
        x={326.89865}
        y={425.47116}
        width={112.31902}
        height={19.781561}
        id="rect457-8-7"
      />
    </defs>
    <g id="layer1">
      <rect
        style={{
          fill: "#000000",
          fillOpacity: 0.14902,
          strokeWidth: 0.264583,
        }}
        id="IOL_Master"
        width={74.161293}
        height={164.29033}
        x={66}
        y={58.548389}
      />
      <circle
        style={{
          fill: "#000000",
          fillOpacity: 0.14902,
          strokeWidth: 0.264583,
        }}
        id="Port1"
        cx={101.30645}
        cy={101.30645}
        r={11.532258}
      />
      <circle
        style={{
          fill: config.Port2,
          fillOpacity: 0.14902,
          strokeWidth: 0.264583,
        }}
        id="Port2"
        cx={101.48388}
        cy={154.35483}
        r={11.532258}
      />
      <rect
        style={{
          fill: "#000000",
          fillOpacity: 0.14902,
          strokeWidth: 0.264583,
        }}
        id="LED_status_Port1"
        width={6.3870969}
        height={6.7419353}
        x={82.322586}
        y={84.096779}
      />
      <rect
        style={{
          fill: config.myLED,
          fillOpacity: 0.14902,
          strokeWidth: 0.264583,
        }}
        id="LED_Pin2_Port1"
        width={6.3870969}
        height={6.7419353}
        x={112.83871}
        y={83.919357}
      />
      <rect
        style={{
          fill: "#000000",
          fillOpacity: 0.14902,
          strokeWidth: 0.264583,
        }}
        id="LED_status_Port2"
        width={6.3870969}
        height={6.7419353}
        x={84.096771}
        y={136.43549}
      />
      <rect
        style={{
          fill: "#000000",
          fillOpacity: 0.14902,
          strokeWidth: 0.264583,
        }}
        id="LED_Pin2_Port2"
        width={6.3870969}
        height={6.7419353}
        x={111.77419}
        y={136.43549}
      />
      <text
        xmlSpace="preserve"
        transform="matrix(0.26458333,0,0,0.26458333,6.0916733,54.70493)"
        id="text_Port2"
        style={{
          whiteSpace: "pre",
          shapeInside: "url(#rect457-8)",
          fill: "#000000",
          fillOpacity: 0.14902,
        }}
      >
        <tspan x={326.89844} y={436.41867} id="tspan546">
          {config.Port2Text}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        transform="matrix(0.26458333,0,0,0.26458333,5.9370751,1.4791238)"
        id="text_Port1"
        style={{
          whiteSpace: "pre",
          shapeInside: "url(#rect457-8-7)",
          fill: "#000000",
          fillOpacity: 0.14902,
        }}
      >
        <tspan x={326.89844} y={436.41867} id="tspan548">
          {"hallo Port 1"}
        </tspan>
      </text>
    </g>
  </svg>
)

export default IOLinkMasterPic
