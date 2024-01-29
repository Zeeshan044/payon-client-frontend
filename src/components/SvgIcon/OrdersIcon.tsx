import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const OrdersIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M39.61 37.093l-2.637-4.396a13.058 13.058 0 01-1.862-6.718v-3.851c0-4.861-3.244-8.973-7.68-10.299V9.072A3.075 3.075 0 0024.359 6a3.075 3.075 0 00-3.072 3.072v2.757c-4.436 1.326-7.68 5.438-7.68 10.299v3.85c0 2.366-.644 4.689-1.86 6.718L9.11 37.092a.767.767 0 00.657 1.164H38.95a.77.77 0 00.659-1.163M24.359 42.864c2.136 0 3.97-1.263 4.837-3.072h-9.674c.866 1.81 2.7 3.072 4.837 3.072"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default OrdersIcon;
