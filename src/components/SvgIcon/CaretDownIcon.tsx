import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const CaretDownIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.316 14h29.356c2.031 0 3.047 2.453 1.61 3.89L25.608 32.575c-.89.89-2.34.89-3.23 0L7.708 17.891C6.27 16.453 7.285 14 9.317 14z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
};

export default CaretDownIcon;
