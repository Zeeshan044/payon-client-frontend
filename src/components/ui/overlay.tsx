import React from "react";

interface Props {
    children?: React.ReactNode;
}
const Overlay: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default Overlay;
