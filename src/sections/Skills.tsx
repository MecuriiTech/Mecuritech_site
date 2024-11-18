import React from 'react';

const SkillsOverview: React.FC = () => {
  const skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 100 },
    { name: 'Tailwind', percentage: 100 },
    { name: 'JavaScript', percentage: 100 },
    { name: 'React', percentage: 100 },
    { name: 'Photoshop', percentage: 100 },
    { name: 'UI/UX', percentage: 100 },
    { name: 'Project Management', percentage: 100 },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-slate-100 shadow-md rounded-lg mt-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-black">
        We specialize in delivering innovative software solutions tailored to meet the unique needs of our clients.
      </h2>
      <p className="text-center mb-6 text-black">
        Our team of experienced professionals is dedicated to providing high-quality services across a wide range of domains, using:
      </p>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col sm:flex-row items-center">
            <span className="w-full sm:w-32 font-semibold text-black text-center sm:text-left">{skill.name}</span>
            <div className="w-full sm:flex-1 bg-gray-200 rounded-full h-4 mx-0 sm:mx-2 mt-2 sm:mt-0">
              <div
                className="bg-black h-4 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-black mt-1 sm:mt-0">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsOverview;
