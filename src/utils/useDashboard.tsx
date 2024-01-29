import React from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

interface CustomRestaurantProps {
  style?: React.CSSProperties;
  onClick: Function;
  text: string;
  loading?: boolean;
  restaurantNumber?: number;
  upIcon?: boolean;
  downIcon?: boolean;
  pIcon?: boolean;
  percentage?: string;
  orders?: number;
  quantity?: string;
}

const CustomRestaurant: React.FC<CustomRestaurantProps> = ({
  style,
  onClick,
  text,
  loading,
  restaurantNumber,
  upIcon,
  downIcon,
  percentage,
  orders,
  quantity,
}) => {
  return (
    <div className="m-2">
      <div
        className="flex flex-col rounded-md w-full shadow-md bg-slate-100 border-2"
        onClick={() => {}}
      >
        <span className="text-2xl m-2">{text}</span>
        <span className="m-2 text-3xl">{restaurantNumber}</span>
        {(upIcon || downIcon) && (
          <div className="flex items-center justify-between m-1 text-3xl px-2 pb-2">
            <div>
              <span>{upIcon ? quantity : orders}</span>
            </div>
            <div className="flex items-center">
              <span>{upIcon ? <BiUpArrowAlt /> : <BiDownArrowAlt />}</span>
              <span>{percentage}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomRestaurant;
