import React, {FC} from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const StatsIcon: FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.625 36.847c5.938-.126 10.729-4.917 10.855-10.855a.234.234 0 00-.233-.24h-10.63a.233.233 0 00-.232.232v10.63c0 .131.109.235.24.233zM25.618 23.555h15.71a.232.232 0 00.231-.249c-.645-8.496-7.427-15.642-15.925-16.285a.232.232 0 00-.249.232v16.07c0 .128.104.232.233.232zM23.226 23.587V7.253a.232.232 0 00-.249-.232C14.04 7.699 7 15.164 7 24.275A17.25 17.25 0 009.358 33c.068.116.222.149.333.072l13.434-9.295a.232.232 0 00.1-.191zM23.074 26.44l-12.272 8.49a.097.097 0 00-.021.141 17.275 17.275 0 0012.341 6.469.097.097 0 00.104-.097V26.519a.097.097 0 00-.152-.08z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default StatsIcon;
