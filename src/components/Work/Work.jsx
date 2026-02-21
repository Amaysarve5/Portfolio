import React, { useState } from 'react'
import { projects } from '../../constants'
import ShowAllButton from './ShowAllButton'

const Work = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const handleOpenModel = (project) => {
    setSelectedProject(project);
  }
  const handleCloseModel = () => {
    setSelectedProject(null);
  }

  return (
    <section
      id="work"
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
      {/* section title */}
        <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-heading'>
          PROJECTS
        </h2>
        <div className='w-32 h-1 mx-auto mt-4 rounded-sm' style={{ background: '#2EA6FF' }}></div>
        <p className='text-muted mt-4 text-lg font-semibold'>
          A showcase of the projects I have worked on, highlighting skills and experience across technologies.
        </p>
      </div>

      {/* project grid */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {(showAll ? projects : projects.slice(0, 3)).map((project, index) => {
          return (
            <div
              key={project.id}
              onClick={() => handleOpenModel(project)}
              className='border border-gray-700 bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-[0_8px_30px_rgba(124,92,255,0.08)] hover:-translate-y-2 transition-transform duration-300 card-entrance'
              style={{ animationDelay: `${index * 90}ms` }}>
              <div className='p-4'>
                <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl' />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-heading mb-2'>
                  {project.title}
                </h3>
                <p className='text-muted mb-4 pt-5 line-clamp-3'>
                  {project.description}
                </p>
                <div className='mb-4'>
                  {project.tags.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className='inline-block bg-transparent border border-gray-700/50 text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2'
                        style={{ color: '#2EA6FF' }}>
                        {tag}
                      </div>
                    )
                  })}
                </div>

                  

              </div>
            </div>
          )
        })}
      </div>

      {/* modal container */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-90 p-4'>
            <div className='bg-gray-900/90 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-gray-700'>
            <div className='flex justify-end p-4'>
              <button onClick={handleCloseModel}
                className='text-heading text-3xl font-bold' style={{ cursor: 'pointer' }}> &times; </button>
            </div>
            <div className='flex flex-col'>
              <div className='w-full lg:h-80  flex justify-center bg-gray-900 px-4'>
                <img src={selectedProject.image} alt={selectedProject.title} className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl' />
              </div>
              <div className='lg:p-8 p-6'>
                <h3 className='lg:text-3xl font-bold text-heading mb-4 text-md'>
                  {selectedProject.title}
                </h3>
                <p className='text-muted mb-6 lg:text-base text-xs'>
                  {selectedProject.description}
                </p>
                <div className='flex flex-wrap mb-6 gap-2'>
                  {selectedProject.tags.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className='bg-gray-800 text-xs font-semibold rounded-full px-2 py-1' style={{ color: '#2EA6FF' }}>
                        {tag}
                      </div>
                    )
                  })}
                </div>
                <div className='flex gap-4'>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className='w-1/2 bg-gray-800 hover:bg-gray-700 text-body lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm font-semibold'>View Code</a>
                  <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className='w-1/2 hover:opacity-95 text-black lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm font-semibold' style={{ background: 'linear-gradient(90deg, var(--color-primary), #2EA6FF)' }}>View Live</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {projects.length > 3 && (
                    <ShowAllButton showAll={showAll} toggle={() => setShowAll((s) => !s)} total={projects.length} />
                  )}

    </section>
  )
}

export default Work
