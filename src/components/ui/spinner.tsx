import React, { FC } from "react";

interface Props {
    size?: number;
    fill?: string;
}

const Spinner = ({ fill = "#fff", size = 40 }: Props) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg">
            <circle fill={fill} cx="8" cy="20" r="4">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"
                />
            </circle>
            <circle fill={fill} cx="20" cy="20" r="4">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.2"
                />
            </circle>
            <circle fill={fill} cx="32" cy="20" r="4">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.3"
                />
            </circle>
        </svg>
    );
};

export default Spinner;
