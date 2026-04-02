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
          <a href="https://www.infinityelectricalsservices.com/" target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-semibold text-heading hover:text-accent transition-colors">Infinity Electrical Services</h3>
          </a>
          <p className="text-muted">Website Development - Client Project</p>
          <ul className="mt-4 text-body list-disc list-inside">
            <li>Developed a professional website for electrical services company.</li>
            <li>Implemented responsive design for enhanced user experience across devices.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience