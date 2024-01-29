import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const PlusIcon: React.FC<Props> = ({fill = "#000", size = 48}) => {
  return (
    <svg height={size} viewBox="0 0 256 256" width={size}>
      <path
        fill={fill}
        d="M208 122h-74V48c0-3.534-2.466-6.4-6-6.4s-6 2.866-6 6.4v74H48c-3.534 0-6.4 2.466-6.4 6s2.866 6 6.4 6h74v74c0 3.534 2.466 6.4 6 6.4s6-2.866 6-6.4v-74h74c3.534 0 6.4-2.466 6.4-6s-2.866-6-6.4-6z"
      />
    </svg>
  );
};

export default PlusIcon;
