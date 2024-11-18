import Project from "@/assets/images/project-management.png";

import Quality from "@/assets/images/quality-assurance.png";
import Software from "@/assets/images/software.png";
import Ui from "@/assets/images/ui-ux.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import grainImage from "@/assets/images/grain.jpg";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Software Development",
    position: "#",
    text: "Proficient in various programming languages including Python, Java, JavaScript, and more.",
    avatar: Software,
  },
  {
    name: "UI/UX Design",
    position: "#",
    text: "Expertise in creating intuitive and visually appealing user interfaces (UI) for web and mobile applications.",
    avatar: Ui,
  },
  {
    name: "Quality Assurance (QA)",
    position: "#",
    text: "Strong understanding of software testing methodologies and best practices.",
    avatar: Quality,
  },
  {
    name: "Project Management",
    position: "#",
    text: "Experience in coordinating cross-functional teams to deliver projects on time using agile and scrum practices.",
    avatar: Project,
  },
];

export const TestimonialsSection = () => {
  return (
    <div id="service" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Services"
          description=""
          eyebrow="At MecuriTech, we offer a comprehensive suite of services designed to meet the diverse technological needs of our clients. Our expertise spans across various domains, ensuring that we deliver tailored solutions that drive growth, efficiency, and innovation."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-auto py-4 -my-4 scrollbar-hide">
          <div className="flex flex-none gap-8 pr-8">
            {[...new Array(2).fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex flex-col gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-2xl">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))]}
          </div>
        </div>
      </div>
    </div>
  );
};
