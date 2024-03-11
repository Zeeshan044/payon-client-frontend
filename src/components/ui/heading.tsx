import React from "react";

export const Heading = (props: { title: string }) => {
  return (
    <div className="flex items-center justify-between border-b pb-5 mb-8">
      <h2 className=" text-4xl font-bold">{props.title}</h2>
    </div>
  );
};
