import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const ImageIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M37.813 36.5H10.186A3.187 3.187 0 017 33.312V14.189A3.187 3.187 0 0110.188 11h27.624A3.187 3.187 0 0141 14.188v19.124a3.187 3.187 0 01-3.188 3.188zM14.436 14.719a3.719 3.719 0 100 7.437 3.719 3.719 0 000-7.437zM11.25 32.25h25.5v-7.438l-5.812-5.811a.797.797 0 00-1.127 0L20.813 28l-3.687-3.687a.797.797 0 00-1.127 0l-4.749 4.75v3.187z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
};

export default ImageIcon;
