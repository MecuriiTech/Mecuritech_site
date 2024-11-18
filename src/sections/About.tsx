"use client";

import React, { useRef } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/O2-removebg-preview-1.png";
import bookImage1 from "@/assets/images/OEAHD.png";
import Image from "next/image";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import WhatsappIcon from "@/assets/icons/whatsapp.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import { Cardheader } from "@/components/Cardheader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import "@/app/index.css";

const toolboxItems = [
  {
    title: "Facebook",
    iconType: FacebookIcon,
    link: "https://www.facebook.com/",
  },
  {
    title: "Twitter",
    iconType: TwitterIcon,
    link: "https://www.twitter.com/",
  },
  {
    title: "Instagram",
    iconType: InstagramIcon,
    link: "https://www.instagram.com/",
  },
  {
    title: "Whatsapp",
    iconType: WhatsappIcon,
    link: "https://wa.me/your-phone-number",
  },
];

const Members = [
  {
    title: "Abas<Aquaman/>",
    emoji: "👨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Geekyeddie<Batman/>",
    emoji: "👨",
    left: "50%",
    top: "5%",
  },
  {
    title: "Micheal<Superman/>",
    emoji: "👨",
    left: "10%",
    top: "35%",
  },
  {
    title: "Dele<Shazam/>",
    emoji: "👨",
    left: "35%",
    top: "40%",
  },
  {
    title: "Roland<Nick-fury/>",
    emoji: "👨",
    left: "70%",
    top: "45%",
  },
  // {
  //   title: "David Jones",
  //   emoji: "👨",
  //   left: "5%",
  //   top: "65%",
  // },
  // {
  //   title: "Olivia Garcia",
  //   emoji: "👩",
  //   left: "45%",
  //   top: "70%",
  // },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-27">
      <div className=" container">
        <SectionHeader eyebrow="" title="" description="" />
        <div className=" mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-6 lg:col-span-3 overflow-hidden">
              <Cardheader title="Our handles" description="" className="" />

              <div className="relative overflow-x-scroll scrollbar-hide">
                {" "}
                <div className="flex space-x-4 min-w-max">
                  {" "}  
                  <ToolboxItems  
                    items={toolboxItems}
                    className="whitespace-nowrap scroll-smooth"
                    itemsWrapperClassName="animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]"
                  />
                </div>
              </div>

              <div className="relative overflow-x-scroll mt-6 scrollbar-hide">
                <div className="flex space-x-4 min-w-max">
                  <ToolboxItems
                    items={toolboxItems}
                    className="whitespace-nowrap scroll-smooth"
                    itemsWrapperClassName="animate-move-right [animation-duration:60s] hover:[animation-play-state:paused]"
                  />
                </div>
              </div>
            </Card>

            {/* <Card className=" h-[320px] md:col-span-2 lg:col-span-1">
              <div className=" w-40 mx-auto mt-2 md:mt-0"></div>
            </Card> */}
          </div>
          <div className=" grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className=" h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <Cardheader
                title="Meet our Team"
                description=""
                className=" px-6 py-6"
              />

              <div className=" relative flex-1" ref={constraintRef}>
                {Members.map((Member) => (
                  <motion.div
                    key={Member.title}
                    className=" inline-flex items-center gap-2 px-6 bg-gradient-to-r from-black to-black rounded-full py-1.5 absolute text-white"
                    style={{
                      left: Member.left,
                      top: Member.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className=" font-medium text-white">
                      {Member.title}
                    </span>
                    <span>{Member.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className=" h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <div className="relative w-full h-0 pb-[56.25%]">
                {" "}
                <iframe
                  className="absolute top-0 left-0 w-full h-[320px]"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d504296.5504966897!2d7.461949000000001!3d9.080448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae8787f2b3f%3A0x64da2f1a9d132b33!2s23%20Ndjamena%20Cres%2C%20Wuse%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1728735394967!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
