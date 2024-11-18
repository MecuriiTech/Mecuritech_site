import React from "react";

export const SectionHeader = ({title,eyebrow,description,}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
  return (
    <>
      <div className=" flex justify-center">
        <p className=" uppercase font-extrabold tracking-widest bg-gradient-to-r from-gray-100   to-gray-700 text-transparent bg-clip-text">
         {eyebrow}
        </p>
      </div>
      <h2 className=" font-sans text-3xl md:text-5xl text-center mt-6 bg-gradient-to-r from-gray-100   to-gray-700 text-transparent bg-clip-text font-extrabold pb-1">
        {title}
      </h2>
      <p className=" text-center md:text-lg lg:text-xl text-black mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
