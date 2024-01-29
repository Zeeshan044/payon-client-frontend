import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const MenuIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.745 23.2h-7.29A4.46 4.46 0 017 18.745v-7.29A4.46 4.46 0 0111.455 7h7.29a4.46 4.46 0 014.455 4.455v7.29a4.46 4.46 0 01-4.455 4.455zm-7.29-14.04a2.297 2.297 0 00-2.295 2.295v7.29a2.297 2.297 0 002.295 2.295h7.29a2.297 2.297 0 002.295-2.295v-7.29a2.297 2.297 0 00-2.295-2.295h-7.29zM37.105 23.2h-7.29a4.46 4.46 0 01-4.455-4.455v-7.29A4.46 4.46 0 0129.815 7h7.29a4.46 4.46 0 014.455 4.455v7.29a4.46 4.46 0 01-4.455 4.455zm-7.29-14.04a2.297 2.297 0 00-2.295 2.295v7.29a2.297 2.297 0 002.295 2.295h7.29a2.297 2.297 0 002.295-2.295v-7.29a2.297 2.297 0 00-2.295-2.295h-7.29zM33.46 41.56c-4.466 0-8.1-3.634-8.1-8.1 0-4.466 3.634-8.1 8.1-8.1 4.466 0 8.1 3.634 8.1 8.1 0 4.466-3.634 8.1-8.1 8.1zm0-14.04a5.947 5.947 0 00-5.94 5.94 5.947 5.947 0 005.94 5.94 5.947 5.947 0 005.94-5.94 5.947 5.947 0 00-5.94-5.94zM18.745 25.36a4.46 4.46 0 014.455 4.455v7.29a4.46 4.46 0 01-4.455 4.455h-7.29A4.46 4.46 0 017 37.105v-7.29a4.46 4.46 0 014.455-4.455h7.29zm0 2.16h-7.29a2.297 2.297 0 00-2.295 2.295v7.29a2.297 2.297 0 002.295 2.295h7.29a2.297 2.297 0 002.295-2.295v-7.29a2.297 2.297 0 00-2.295-2.295z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default MenuIcon;