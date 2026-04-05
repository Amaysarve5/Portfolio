import React from 'react'
import { experience } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-heading">Experience</h2>
        <div className="w-32 h-1 bg-accent mx-auto mt-4 rounded-sm"></div>
        <p className="text-muted mt-4 text-lg font-semibold">
          My professional experience building web applications and collaborating with teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experience.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900/60 p-6 rounded-2xl border border-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          >
            <a href={item.website} target="_blank" rel="noopener noreferrer">
              <h3 className="text-xl font-semibold text-heading hover:text-accent transition-colors">
                {item.title}
              </h3>
            </a>
            <p className="text-muted">{item.headline}</p>
            <p className="mt-4 text-body">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience