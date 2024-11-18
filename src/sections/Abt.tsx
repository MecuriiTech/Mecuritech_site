import React from 'react';

const AbtUs: React.FC = () => {
    return (
        <section id='aboutus' className="bg-slate-100 py-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 shadow-lg rounded-lg my-16 ">
          <div className="max-w-7xl mx-auto px-6 text-black">
            <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
            <p className="text-lg text-center mb-12">
              At MecuriTech, we are committed to providing a comprehensive range of cutting-edge software solutions designed to meet the diverse needs of our clients. Our offerings include:
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Column */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">With a diverse team of talented professionals</h3>
                <p className="text-lg">
                  We specialize in delivering custom software development, web and mobile app development, UI/UX design services, quality assurance and testing, cloud solutions, and data analytics.
                </p>
              </div>
    
              {/* Right Column */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="text-lg">
                  Our mission is to empower businesses of all sizes to thrive in todays digital landscape by providing cutting-edge technology solutions tailored to their unique needs.
                </p>
                <p className="text-lg">
                  With a focus on collaboration, transparency, and excellence, we strive to exceed our clients expectations and deliver tangible results that drive growth and success. At MecuriTech, we believe in building long-lasting relationships based on trust, integrity, and mutual respect.
                </p>
                <p className="text-lg">
                  We are committed to continuous learning, innovation, and improvement, always staying ahead of the curve to ensure our clients remain competitive in an ever-evolving market.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
export default AbtUs;
