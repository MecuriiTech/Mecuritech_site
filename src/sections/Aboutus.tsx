import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import grainImage from "@/assets/images/grain.jpg";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const AboutSection = () => {
  return (
    <div className="py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Who We Are"
          description="OEAHD (Organization for Environmental Action and Human Development) is committed to fostering sustainable development through a multi-faceted approach in agriculture, health, and environmental conservation. Learn about our core values, projects, and the people behind our initiatives."
          eyebrow="ABOUT OEAHD"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="p-8">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4">
              At OEAHD, our mission is to empower communities by providing them
              with the tools, education, and support they need to actively
              contribute to sustainable development in their regions.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-4">
              We envision a world where every individual has access to the
              resources and opportunities needed to thrive, while contributing
              to a healthy environment and sustainable future.
            </p>
          </Card>
        </div>

        <SectionHeader
          title="Our Initiatives"
          description="Through focused efforts in agricultural empowerment, environmental conservation, public health, and more, OEAHD is making a measurable impact."
          eyebrow="WHAT WE DO"
        />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Agricultural Empowerment",
              text: "Empowering farmers to ensure food security and promote sustainable practices.",
              image: memojiAvatar1,
            },
            {
              name: "Women's Empowerment",
              text: "Providing opportunities and support for women to become leaders and changemakers in their communities.",
              image: memojiAvatar2,
            },
            {
              name: "Health Initiatives",
              text: "Focusing on maternal and child health, increasing immunization rates, and improving rural healthcare systems.",
              image: memojiAvatar3,
            },
            {
              name: "Environmental Conservation",
              text: "Promoting tree planting campaigns, environmental education, and sanitation efforts to preserve our planet.",
              image: memojiAvatar4,
            },
            {
              name: "Sustainable Livelihoods",
              text: "Fostering entrepreneurship and vocational training to help communities achieve economic independence.",
              image: memojiAvatar5,
            },
          ].map((initiative, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4">
                <Image
                  src={initiative.image}
                  alt={initiative.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-xl font-semibold">{initiative.name}</h4>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{initiative.text}</p>
            </Card>
          ))}
        </div>

       
        <SectionHeader
          title="What People Say About Us"
          description="Hear from individuals whose lives we've touched through our work."
          eyebrow="TESTIMONIALS"
          
        />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "John Doe",
              text: "OEAHD's agricultural programs have transformed my farm, helping me adopt sustainable practices and increase yields.",
              image: memojiAvatar1,
            },
            {
              name: "Jane Smith",
              text: "Thanks to OEAHD’s women’s empowerment initiatives, I now have the skills and confidence to start my own business.",
              image: memojiAvatar2,
            },
            {
              name: "Michael Lee",
              text: "Their health programs have saved countless lives in our village, improving access to vaccinations and medical care.",
              image: memojiAvatar3,
            },
          ].map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{testimonial.text}</p>
            </Card>
          ))}
        </div>

        
        <SectionHeader
          title="Meet the Team"
          description="The dedicated individuals behind OEAHD’s impact."
          eyebrow="OUR TEAM"
          
        />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Alice Johnson", role: "CEO", image: memojiAvatar1 },
            { name: "Michael Smith", role: "COO", image: memojiAvatar2 },
            {
              name: "Emily Davis",
              role: "Head of Development",
              image: memojiAvatar3,
            },
            {
              name: "James Wilson",
              role: "Lead Environmentalist",
              image: memojiAvatar4,
            },
          ].map((teamMember, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4">
                <Image
                  src={teamMember.image}
                  alt={teamMember.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-xl font-semibold">{teamMember.name}</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    {teamMember.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
