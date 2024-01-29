import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const CheckmarkIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.198 24.81a1.362 1.362 0 01-.373-.884c0-.251.122-.625.373-.876l1.76-1.759a1.213 1.213 0 011.758 0l.124.129 6.908 7.403a.602.602 0 00.877 0l16.818-17.45h.129a1.226 1.226 0 011.759 0l1.754 1.758a1.215 1.215 0 010 1.76l-20.08 20.841c-.252.251-.504.373-.884.373-.373 0-.625-.122-.876-.373L8.45 25.182l-.251-.373z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default CheckmarkIcon;
