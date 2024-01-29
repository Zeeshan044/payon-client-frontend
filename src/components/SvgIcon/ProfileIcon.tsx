import React, { FC } from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const ProfileIcon: FC<Props> = ({ fill = "#000", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          d="M.587 15.003C.587 7.146 6.871.757 14.689.59l.314-.003c7.857 0 14.245 6.284 14.412 14.102l.003.314c0 7.857-6.283 14.245-14.102 14.412l-.313.003C7.146 29.418.757 23.135.59 15.316l-.003-.313z"
          id="a"
        />
        <path
          d="M-2 15C-2 5.72 5.435-1.825 14.677-1.997L15-2c9.28 0 16.825 7.435 16.997 16.677L32 15c0 9.28-7.435 16.825-16.677 16.997L15 32C5.72 32-1.825 24.565-1.997 15.323L-2 15z"
          id="c"
        />
      </defs>
      <g transform="translate(9 9)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <g mask="url(#b)" fill={fill}>
          <path d="M20.66 11.436c0 2.98-2.515 5.397-5.618 5.397s-5.618-2.417-5.618-5.397c0-2.98 2.515-5.397 5.618-5.397s5.618 2.416 5.618 5.397zM15.042 19.531c-5.624 0-10.183 4.38-10.183 9.783h20.366c0-5.403-4.56-9.783-10.183-9.783z" />
        </g>
        <use stroke={fill} strokeWidth="2" xlinkHref="#c" />
      </g>
    </svg>
  );
};

export default ProfileIcon;
