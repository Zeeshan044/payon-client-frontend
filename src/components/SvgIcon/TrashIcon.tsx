import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const TrashIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M15.594 37.895a2.592 2.592 0 002.683 2.32h11.46a2.638 2.638 0 002.728-2.365l1.864-19.463H13.32l2.274 19.508M27.462 11.115h-7.275V9.66a.728.728 0 01.773-.818h5.73a.728.728 0 01.772.818v1.455zm10.278 0H29.28V9.66a2.546 2.546 0 00-2.592-2.637h-5.73a2.547 2.547 0 00-2.591 2.637v1.455H9.909a.91.91 0 000 1.82h27.83a.91.91 0 000-1.82z"
      />
    </svg>
  );
};

export default TrashIcon;
