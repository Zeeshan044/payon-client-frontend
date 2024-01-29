import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const TablesIcon: React.FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg width={size} height={size} viewBox="0 -15 47 51">
      <defs>
        <path id="prefix__a" d="M.005 0H43.92v27.405H.005z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1)">
          <mask id="prefix__b" fill="#fff">
            <use xlinkHref="#prefix__a" />
          </mask>
          <path
            d="M43.2 0a.722.722 0 00-.72.72v10.998H29.79a.702.702 0 00-.72.702v14.265a.72.72 0 001.44 0v-8.847h11.97v8.838a.72.72 0 101.44 0V.71A.715.715 0 0043.2 0zM14.13 11.718H1.44V.72A.72.72 0 000 .72v25.965a.72.72 0 001.44 0v-8.847h11.97v8.838a.72.72 0 101.44 0V12.41a.7.7 0 00-.72-.693z"
            fill={fill}
            mask="url(#prefix__b)"
          />
        </g>
        <path
          fill={fill}
          d="M13.6 7.398h18.72v-3.24H13.6zM21.88 25.938h2.16v-17.1h-2.16z"
        />
      </g>
    </svg>
  );
};

export default TablesIcon;
