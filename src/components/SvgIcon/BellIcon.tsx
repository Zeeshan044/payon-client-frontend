import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const BellIcon: FC<Props> = ({size = 26}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F57C00"
        d="M255.871,0c-29.455,0-53.333,23.878-53.333,53.333c0.05,2.559,0.286,5.112,0.704,7.637
	c0.769,5.285,5.327,9.186,10.667,9.131c1.018-0.001,2.03-0.145,3.008-0.427c25.488-7.541,52.614-7.541,78.101,0
	c3.031,0.75,6.237,0.168,8.811-1.6c2.629-1.798,4.385-4.614,4.843-7.765c0.383-2.314,0.597-4.652,0.64-6.997
	C309.3,23.857,285.412-0.012,255.957,0C255.928,0,255.9,0,255.871,0z"
      />
      <path
        fill="#FFA000"
        d="M319.871,426.667h-128c-5.891,0-10.667,4.776-10.667,10.667c0,41.237,33.429,74.667,74.667,74.667
	s74.667-33.429,74.667-74.667C330.538,431.442,325.763,426.667,319.871,426.667z"
      />
      <path
        fill="#FFC107"
        d="M454.719,388.459c-3.371-7.445-7.616-15.765-12.309-24.939
	c-28.867-48.898-45.304-104.128-47.872-160.853c0-84.544-44.8-146.581-114.091-158.037c-40.434-6.499-81.649,5.516-112.256,32.725
	c-33.881,29.576-52.678,72.811-51.2,117.76c-0.883,59.426-17.298,117.586-47.616,168.704c-4.587,9.045-8.768,17.28-12.096,24.619
	c-9.614,21.203-0.22,46.186,20.984,55.801c5.53,2.508,11.536,3.791,17.608,3.762h320.341c23.281,0.07,42.211-18.747,42.28-42.028
	c0.018-6.039-1.262-12.011-3.753-17.513H454.719z"
      />
      <path
        fill="#FFD54F"
        d="M113.642,405.333c-5.891,0-10.667-4.776-10.666-10.667c0-1.659,0.387-3.295,1.13-4.778l3.435-6.741
	c31.862-55.009,49.825-116.959,52.331-180.48c0-54.123,25.152-117.333,96-117.333c5.891,0,10.667,4.776,10.667,10.667
	c0,5.891-4.776,10.667-10.667,10.667c-69.291,0-74.667,73.472-74.667,96c-2.381,66.916-21.156,132.223-54.677,190.187l-3.328,6.592
	C121.388,403.061,117.687,405.341,113.642,405.333z"
      />
    </svg>
  );
};

export default BellIcon;
