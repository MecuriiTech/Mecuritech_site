import Ecommerce from "@/assets/images/Leonardo_Phoenix_a_highly_stylized_dreamlike_and_vibrant_cinem_1.jpg";
import RealEstate from "@/assets/images/Leonardo_Phoenix_A_sleek_modern_photograph_featuring_a_collect_2.jpg";
import AI from "@/assets/images/Leonardo_Phoenix_In_a_futuristic_hightech_setting_a_profession_3.jpg";
import ML from "@/assets/images/Leonardo_Phoenix_A_futuristic_hightech_setting_with_a_cinemati_2.jpg";
import SustainPage from "@/assets/images/img1.png";
import Grainimage from "@/assets/images/grain.jpg";
import Image from "next/image";
import Checkicon from "@/assets/icons/check-circle.svg";
import Arrowright from "@/assets/icons/arrow-up-right.svg";





const portfolioProjects = [
  {
    company: "#",
    year: "#",
    title: "E-commerce Solutions",
    results: [
      { title: "Development of scalable and secure e-commerce platforms." },
      { title: "Features such as product catalogs, shopping carts, payment gateways, and order tracking." },
      { title: "Customizable solutions to enhance your online retail experience." },
    ],
    link: "#",
    image: Ecommerce,
  },
  {
    company: "#",
    year: "#",
    title: "Real Estate Solutions",
    results: [
      { title: "Innovative platforms for buying, selling, and renting properties." },
      { title: "Advanced search functionalities, direct communication, and secure transactions." },
      { title: "Integration with VR tours, property verification, and user reviews." },
    ],
    link: "#",
    image: RealEstate,
  },
  {
    company: "#",
    year: "#",
    title: "Artificial Intelligence and Machine Learning",
    results: [
      { title: "Development of AI-driven solutions for predictive analytics, automation, and enhanced decision-making." },
      { title: "Custom machine learning models tailored to your business needs." },
      { title: "Integration of AI technologies to improve efficiency and innovation." },
    ],
    link: "#",
    image: ML,
  },
  {
    company: "#",
    year: "#",
    title: "IT Consulting Services",
    results: [
      { title: "Expert advice on technology strategy, system architecture, and digital transformation." },
      { title: "Evaluation and optimization of existing IT infrastructure." },
      { title: "Guidance on implementing new technologies and best practices." },
    ],
    link: "#",
    image: AI,
  },
  {
    company: "#",
    year: "#",
    title: "Custom Software Development",
    results: [
      { title: "Tailored software solutions to meet specific business requirements." },
      { title: "Development of web, mobile, and desktop applications." },
      { title: "Ensuring scalability, security, and performance." },
    ],
    link: "#",
    image: SustainPage,
  },
];


export const ProjectsSection = () => {
  return (
    <>
    
    
    <div className=" pb-16 lg:py-24">
      <div className=" container">
        <div className=" flex justify-center">
          <p className=" uppercase font-extrabold tracking-widest bg-gradient-to-r from-gray-100   to-gray-700 text-transparent bg-clip-text">
          At MecuriTech, we are committed to providing a comprehensive range of cutting-edge software solutions designed to meet the diverse needs of our clients.
          </p>
        </div>
        <h2 className=" font-sans text-3xl md:text-5xl text-center mt-6 bg-gradient-to-r from-gray-100   to-gray-700 text-transparent bg-clip-text font-extrabold">MECURI-TECH</h2>
        <p className=" text-center md:text-lg lg:text-xl text-black mt-4 max-w-md mx-auto">
        Our offerings include:
        </p>
        <div className=" flex-col flex md:mt-20 mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-slate-100  border-4 border-black md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl overflow-hidden z-0 after:z-10 after:content-[''] after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-orange-500/20 px-8 pt-8 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`
              }}
            >
              <div className=" absolute inset-0 -z-10 opacity-5" style={{
                 backgroundImage: `url(${Grainimage.src}`,
              }}>

              </div>
              <div className=" lg:grid lg:grid-cols-2 lg:gap-16">

              
              <div className=" lg:pb-16">

             

              <h3 className=" font-sans text-2xl mt-2 md:text-4xl md:mt-5 bg-gradient-to-r from-black to-white inline-flex font-bold uppercase tracking-widest text-transparent bg-clip-text">{project.title}</h3>
              <hr className=" border-t-2 border-orange-500/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result, index) => (
  <div key={index} className="flex text-black gap-2">
    <Checkicon className="w-5 h-5 flex-shrink-0" />
    <li className="flex gap-2 text-sm md:text-base text-black">
      <span>{result.title}</span>
    </li>
  </div>
))}


</ul>

              {/* <a href={project.link}>
                <button className=" bg-black md:w-auto px-6  text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>Read more</span> <Arrowright className=" size-4"/></button>
              </a> */}
              </div>
              <div className=" relative">

             
              <Image src={project.image} alt={project.title} className=" mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};


