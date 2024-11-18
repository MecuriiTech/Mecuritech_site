
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
 

  const handleNavigate = () => {
    window.location.href = "/contactus";
  };
  

  const currentYear = new Date().getFullYear();

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gray-100 text-black py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-sans text-2xl md:text-3xl font-bold">
                Ready to take your business to the next level?
              </h2>
              <p className="text-sm md:text-base mt-2">
                Contact us today to discuss your project requirements and
                discover how our team at MecuriTech can help you achieve your
                goals. Lets turn your ideas into reality and build something
                amazing together. Reach out to us now to schedule a consultation
                and get started on your journey towards success!
              </p>
            </div>
            <div>
              <button
                onClick={handleNavigate}
                className="text-white bg-black inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact us</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <footer className="bg-gray-900 text-white py-6 text-center mt-16">
            <div className="container">
              <p className="text-sm md:text-base">
                &copy; {currentYear} MECURITECH. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
