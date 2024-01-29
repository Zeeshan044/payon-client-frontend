import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const LogoutIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="logouta" d="M.004.046H31.75v32.808H.004z" />
      </defs>
      <g transform="rotate(180 21 20.5)" fill="none" fillRule="evenodd">
        <path
          d="M33.112 17.568H11.487a1.119 1.119 0 010-2.236h21.625a1.119 1.119 0 010 2.236z"
          fill={fill}
        />
        <mask id="logoutb" fill="#fff">
          <use xlinkHref="#logouta" />
        </mask>
        <path
          d="M17.523 23.534a1.11 1.11 0 01-.79-.328l-5.966-5.965a1.12 1.12 0 010-1.583l5.965-5.965a1.119 1.119 0 011.583 1.582L13.14 16.45l5.175 5.175a1.119 1.119 0 01-.792 1.909z"
          fill={fill}
          mask="url(#logoutb)"
        />
        <path
          d="M16.404 32.854C7.36 32.854 0 25.494 0 16.45 0 7.405 7.36.046 16.404.046c6.787 0 12.78 4.083 15.268 10.403a1.12 1.12 0 01-.63 1.451 1.12 1.12 0 01-1.451-.632c-2.15-5.459-7.326-8.986-13.187-8.986-7.811 0-14.167 6.357-14.167 14.168 0 7.811 6.356 14.168 14.167 14.168 5.861 0 11.037-3.527 13.187-8.984A1.12 1.12 0 0131.04 21c.575.227.858.877.631 1.451-2.489 6.32-8.48 10.402-15.268 10.402z"
          fill={fill}
          mask="url(#logoutb)"
        />
      </g>
    </svg>
  );
};

export default LogoutIcon;
