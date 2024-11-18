import React, { useState } from 'react';

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: 'What industries do you serve?', answer: 'We serve clients across various industries including technology, healthcare, finance, retail, e-commerce, education, and more. Our flexible approach allows us to adapt our solutions to meet the specific needs of each industry.' },
    { question: 'How long does it take to develop a custom software solution?', answer: 'The timeline for developing a custom software solution varies depending on factors such as the complexity of the project, required features, and client feedback. We work closely with our clients to establish realistic timelines and milestones to ensure timely delivery.' },
    { question: 'What is your approach to user interface (UI) and user experience (UX) design?', answer: 'We believe in creating user-centric designs that prioritize usability, accessibility, and aesthetics. Our team of designers conducts thorough research and follows industry best practices to craft intuitive and visually appealing interfaces that enhance the overall user experience' },
    { question: 'How do you ensure the quality of your software products?', answer: 'We employ a comprehensive quality assurance (QA) process that includes both manual and automated testing to identify and address any issues or bugs. Our team conducts thorough testing at each stage of development to ensure the reliability, security, and performance of our software products.' },
    { question: 'Do you provide ongoing support and maintenance?', answer: 'Yes, we offer ongoing support and maintenance services to ensure the continued success of our clients software applications. Whether its troubleshooting issues, implementing updates, or adding new features, we are here to provide assistance and support as needed.' },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 rounded-md shadow-sm">
            <button
              className="w-full text-left text-lg font-semibold py-3 px-4 md:px-6 border-b border-gray-300 hover:bg-gray-200 focus:outline-none text-black"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="px-4 md:px-6 py-2 text-gray-700 text-sm md:text-base">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;