import React from "react";
import grainImage from "@/assets/images/grain.jpg";
import {twMerge} from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({className, children}: PropsWithChildren<{
    className?: string;
}>) => {
    return (
        <div className={twMerge ("  bg-slate-100 text-black rounded-3xl overflow-hidden relative z-0 after:z-10 after:content-[''] after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-orange-500/20 after:pointer-events-none", className)}>
            <div className=" absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src}`,
            }}></div>
{children}
        </div>
    );
};