import Pay from "@/assets/icons/pay.svg";
import Trust from "@/assets/icons/trust.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import Earth from "@/assets/icons/earth.svg";
import Earthglobe from "@/assets/icons/earthglobe.svg";
import Leaf from "@/assets/icons/cube.png";
import Leaffluttering from "@/assets/icons/validation.png";
import Treesvg from "@/assets/icons/text.png";
import Farm from "@/assets/icons/team-building.png";
import Heart from "@/assets/icons/shield-lock.png";
import Sprout from "@/assets/icons/schedule.png";
import Stethoscope from "@/assets/icons/database-storage.png";
import Wheat from "@/assets/icons/css.png";
import { HeroOrbit } from "../components/HeroOrbit";
import Logo from "@/assets/images/logo1.png";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-20"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className="size-[620px] hero-ring border-white"></div>
        <div className="size-[820px] hero-ring border-white"></div>
        <div className="size-[1020px] hero-ring border-white"></div>
        <div className="size-[1220px] hero-ring border-white"></div>

        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="10s"
        >
          <Earth className="size-28 text-orange-600" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="10s"
        >
          <Earthglobe className="size-12 text-orange-600" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="10s"
        >
          <Image
            src={Leaffluttering}
            alt="leaffluttering"
            className="size-8 text-orange-600"
          />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="50s"
          shouldSpin
          spinDuration="10s"
        >
          <Image src={Leaf} alt="leaf" className="size-8 text-orange-600/80" />
        </HeroOrbit>
        <HeroOrbit size={540} rotation={79} shouldOrbit orbitDuration="54s">
          <Image
            src={Treesvg}
            alt="tree"
            className="size-10 text-orange-600/80"
          />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="56s">
          <Image
            src={Heart}
            alt="heart"
            className="size-10 text-orange-600/80"
          />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="58s">
          <Image src={Farm} alt="farm" className="size-14 text-orange-600/80" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="60s">
          <Image
            src={Stethoscope}
            alt="Stethoscope"
            className="size-8 text-orange-600/80"
          />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="64s">
          <Image
            src={Sprout}
            alt="sprout"
            className="size-14 text-orange-600/80"
          />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="66s">
          <Image
            src={Wheat}
            alt="wheat"
            className="size-14 text-orange-600/80"
          />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={Logo.src}
            alt="Company Logo"
            width={50}
            height={50}
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-white size-2.5 rounded-full relative">
              <div className=" bg-white absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-semibold text-white">
              Partner with us today
            </div>
            <div className="bg-white size-2.5 rounded-full relative">
              <div className=" bg-white absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-sans text-2xl md:text-3xl text-center mt-8 tracking-wide font-extrabold text-gray-50">
              Better Solutions For Your Business
            </h1>
            <p className="mt-4 text-center md:text-lg text-gray-50">
              We are committed to excellence, innovation, and client
              satisfaction. Whether youre a startup looking to launch your first
              product or an established enterprise seeking to modernize your
              technology stack, were here to turn your vision into reality.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center mt-8 gap-4">
            <button className="inline-flex items-center gap-2 border border-white-500/15 px-6 h-12 rounded-xl bg-black">
              <span className="font-semibold text-white">Partner with us</span>
              <Trust className="size-9 text-white" />
            </button>
            <button className="inline-flex items-center gap-2 border border-black bg-slate-100 text-gray-900 h-12 px-6 rounded-xl z-0">
              <Link href="/contactus" className=" flex">
              <span className="font-semibold">Get started</span>    
              {/* <Pay className="size-7 text-white" /> */}
              </Link>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
