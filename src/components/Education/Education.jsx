import React from "react";
import { education } from "../../constants"; // Import data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-heading">Education</h2>
        <div className="w-32 h-1 bg-accent mx-auto mt-4 rounded-sm"></div>
        <p className="text-muted mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line (subtle and hidden on small screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700/30 h-full hidden lg:block z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 bg-accent border-4 border-gray-900 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10"
              style={{ top: "0" }}
            >
              <div className="text-white font-bold text-lg sm:text-2xl">●</div>
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-gray-700 bg-gray-900/60 backdrop-blur-md shadow-[0_0_20px_1px_rgba(124,92,255,0.08)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } mt-12`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-start space-x-4 sm:space-x-6">
                {/* School Logo/Image */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden border border-gray-300 flex items-center justify-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-start flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300 mt-1">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

          
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
