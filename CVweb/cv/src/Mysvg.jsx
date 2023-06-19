import * as React from "react"

function Mysvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2400 800"
      opacity={0.9}
      {...props}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="hsl(208, 77%, 50%)" offset="0%" />
          <stop stopColor="hsl(208, 74%, 93%)" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="url(#a)" transform="translate(0 -155.24)">
        <path
          d="M0 423.273q600 295.631 800 32.867 600 189.033 800-45.66 600 334.345 800 11.854V950H0V430.677z"
          opacity={0.05}
        />
        <path
          d="M0 573.273q600 295.631 800 32.867 600 189.033 800-45.66 600 334.345 800 11.854V1100H0V580.677z"
          opacity={1}
        />
      </g>
    </svg>)
  }

export default Mysvg
