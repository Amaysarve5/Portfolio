import React from 'react'

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
        <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <h3 className="text-xl font-semibold text-heading">Frontend Developer</h3>
          <p className="text-muted">Company / Freelance — 2023 - Present</p>
          <ul className="mt-4 text-body list-disc list-inside">
            <li>Built responsive, accessible interfaces using React and Tailwind.</li>
            <li>Collaborated across design and backend teams to deliver features.</li>
          </ul>
        </div>

        <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <h3 className="text-xl font-semibold text-heading">UI Engineer Intern</h3>
          <p className="text-muted">Internship — 2022 - 2023</p>
          <ul className="mt-4 text-body list-disc list-inside">
            <li>Implemented interactive components, optimized performance.</li>
            <li>Maintained design system and component library.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience