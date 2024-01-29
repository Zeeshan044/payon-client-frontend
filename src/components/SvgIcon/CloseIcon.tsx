import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const CloseIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.445 24l9.665-9.666a3.038 3.038 0 000-4.296L37.962 7.89a3.038 3.038 0 00-4.296 0L24 17.555 14.334 7.89a3.038 3.038 0 00-4.296 0L7.89 10.038a3.038 3.038 0 000 4.296L17.555 24 7.89 33.666a3.038 3.038 0 000 4.296l2.148 2.148a3.038 3.038 0 004.296 0L24 30.445l9.666 9.665a3.038 3.038 0 004.296 0l2.148-2.148a3.038 3.038 0 000-4.296L30.445 24z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  );
};

export default CloseIcon;
