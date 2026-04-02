import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profile.png'
import resume from '../../assets/work_logo/amay_resume.pdf'

const About = () => {
  return (
    <section
      id="about"
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0 animate-fadeInUp'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-heading mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-heading mb-4 leading-tight'>
            Amay Sarve
          </h2>

          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight'>
            <span className='text-body'>
              I am a{" "}
            </span>
            <ReactTypingEffect
              text={[
                'Coder',
                'Frontend Developer',
                'Web Developer',
              ]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span style={{ color: '#2EA6FF' }}>{cursor}</span>
              )}
              displayTextRenderer={(text) => (
                <span style={{ color: '#2EA6FF' }}>{text}</span>
              )}
            />
          </h3>
          {/* About me paragraph */}
          <p className='text-base sm:text-lg md:text-lg text-muted mb-10 mt-8 leading-relaxed'>
            I am passionate about crafting responsive and user-friendly web
        applications using modern technologies. With a keen eye for detail
        and a love for problem-solving, I aim to create digital experiences
        that leave a lasting impression.
          </p>
          {/* resume button */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-full lg:mt-5 mt-1 text-lg font-bold transition transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #00f0ff, #2EA6FF)',
              color: '#000',
              boxShadow: '0 0 20px rgba(46,166,255,0.3)'
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* right side */}
        <div className='md:w-1/2 flex justify-center md:justify-end animate-fadeInUp'>
        <Tilt 
        className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-accent rounded-full animate-floatY'
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
        >
          <img src={profileImage} alt="amay sarve"  className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(124,92,255,0.45)]'/>
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
