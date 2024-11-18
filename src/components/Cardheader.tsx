import React from "react"
import StarIcon from "../assets/icons/star.svg";
import { twMerge } from "tailwind-merge";


export const Cardheader = ({title, description,className,}: {
    title: string;
    description: string;
    className?: string;
}) => {
    return (
        <div className={twMerge(" flex flex-col p-6 md:py-8 md:px-10", className)}>
        <div className=" inline-flex items-center gap-2">
          <StarIcon className=" size-9 text-black"/>
        <h3 className=" font-sans text-3xl">{title}</h3>
        </div>
        
        <p className=" text-sm max-w-xs lg:text-base text-white/50 mt-2">{description}</p>
      </div>
    )
}       