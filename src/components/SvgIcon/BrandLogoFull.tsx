import * as React from "react";
import { SVGProps } from "react";
const BrandLogoFull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={130.64}
        x2={378.62}
        y1={276.45}
        y2={52.15}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#40b2ff" />
        <stop offset={1} stopColor="#4871f6" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
      <text
        style={{
          fill: "#fff",
          fontSize: "151.16px",
          fontFamily:
            "FONTSPRINGDEMO-GroldBoldRegular,FONTSPRING DEMO - Grold Bold",
          fontWeight: 700,
          letterSpacing: "-.03em",
        }}
        transform="translate(47 469.44)"
      >
        {"Pa"}
        <tspan
          x={157.96}
          y={0}
          style={{
            letterSpacing: "-.03em",
          }}
        >
          {"y"}
        </tspan>
        <tspan x={229} y={0}>
          {"On"}
        </tspan>
      </text>
      <path
        d="M254.41.48a164 164 0 1 0 164 164 164 164 0 0 0-164-164Zm0 299.37A135.36 135.36 0 1 1 389.77 164.5a135.35 135.35 0 0 1-135.36 135.35Z"
        style={{
          fill: "url(#a)",
        }}
      />
      <path
        d="M254.41 29.13A135.36 135.36 0 1 0 389.77 164.5 135.36 135.36 0 0 0 254.41 29.13Zm12.42 245.73a110.64 110.64 0 0 1-12.42.7c-2 0-4-.06-6-.16v-51.64a59.78 59.78 0 0 0 18.38-1 59.56 59.56 0 1 0-72-58.26v93.75a111.08 111.08 0 1 1 72 16.61Z"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M365.47 164.5a111.09 111.09 0 0 1-111.06 111.06c-2 0-4-.06-6-.16v-51.64a59.78 59.78 0 0 0 18.38-1 59.56 59.56 0 1 0-72-58.26v93.75a111 111 0 0 1-17.49-13.77v-80a77.05 77.05 0 1 1 89.47 76.05v18.86a95.64 95.64 0 1 0-104.64-69.22v36.2a111.06 111.06 0 1 1 203.34-61.87Z"
        style={{
          fill: "#486ffd",
        }}
      />
      <path
        d="M350.12 164.5a95.71 95.71 0 0 1-83.29 94.91v-18.86a77.06 77.06 0 1 0-89.47-76.05v80a111 111 0 0 1-15.17-18.09l-1.9-28.4-1.59-33.51c0-52.51 43.21-95.71 95.71-95.71 57.44 0 95.71 51.69 95.71 95.71z"
        style={{
          fill: "#fffeff",
        }}
      />
    </g>
  </svg>
);
export default BrandLogoFull;
