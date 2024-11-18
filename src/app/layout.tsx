import type { Metadata } from "next";
import {Quicksand} from 'next/font/google';
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Heart } from "@/components/icons/heart";
import Link from "next/link";
import cloudinary from "cloudinary";
import Image from "next/image";

import {twMerge} from "tailwind-merge";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-sans"});

export const metadata: Metadata = {
  title: "MECURITECH",
  description: "Welcome to the official website of MECURITECH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(quicksand.variable,"bg-black text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}


