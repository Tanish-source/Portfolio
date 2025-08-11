import React, { useEffect, useRef } from 'react'
import AnimatedText from '../Components/AnimatedText'
import ProfilePicture from '/images/profile/profile.png'
import Skills from '@/Components/Skills'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Education from '@/Components/Education'
import TransitionEffect from '@/Components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {

  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref} className='text-center'></span>
}

const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='w-full h-full inline-block z-0 sm:p-20 p-5 pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='sm:mb-16 mb-8 lg:!text-8xl md:!text-7xl sm:!text-6xl !text-4xl' />

          <div className='grid w-full grid-cols-8 sm:gap-16 gap-8'>
            <div className='lg:col-span-3 flex flex-col items-start justify-start md:col-span-4 col-span-8 md:order-0 order-1 sm:my-0 my-5'>
              <h2 className='mb-4 text-lg font-bold uppercase text-white/75'>
                Biography
              </h2>
              <p className='font-medium'>
                I'm Tanish, a Full-Stack Developer skilled in MERN, Django, Flask, and REST APIs — creating everything from sleek, responsive front-end interfaces to scalable, secure back-end systems. My front-end work focuses on clean design, smooth animations, and performance optimization, while my back-end expertise ensures robustness and efficiency.</p>

              <p className='font-medium my-4'>
                I also bring AI integration skills at a medium level, using APIs and models to enhance functionality, personalize user experiences, and automate workflows. Passionate about blending creativity with technical precision, I stay up to date with emerging technologies to deliver solutions that are reliable, engaging, and future-ready.
              </p>

            </div>

            <div className='lg:col-span-3 relative h-max rounded-2xl border-2 border-solid border-white p-8 bg-black md:col-span-4 col-span-8 md:order-1 order-0'>
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-white"
              />
              <img src={ProfilePicture} alt="" className='w-full h-auto rounded-2xl' />
            </div>

            <div className='lg:col-span-2 flex lg:flex-col flex-row sm:flex-nowrap flex-wrap lg:items-end items-center justify-between md:gap-0 gap-4 col-span-8 md:order-2 order-2'>
              <div className='flex flex-col lg:items-end items-center justify-center'>
                <span className='lg:text-6xl text-6xl font-bold'>
                  <AnimatedNumbers value={18} />+
                </span>
                <h2 className='lg:text-lg text-md font-medium capitalize text-white/75 xl:text-right text-center'>projects completed</h2>
              </div>

              <div className='flex flex-col lg:items-end items-center justify-center'>
                <span className='lg:text-6xl text-6xl font-bold'>
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className='lg:text-lg text-md font-medium capitalize text-white/75 xl:text-right text-center'>Year Learning</h2>
              </div>

              <div className='flex flex-col lg:items-end items-center justify-center'>
                <span className='lg:text-6xl text-6xl font-bold'>
                  <AnimatedNumbers value={22} />+
                </span>
                <h2 className='lg:text-lg text-md font-medium capitalize text-white/75 xl:text-right text-center'>Technologies Learned</h2>
              </div>

              <div className='flex flex-col lg:items-end items-center justify-center'>
                <span className='lg:text-6xl text-6xl font-bold'>
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className='lg:text-lg text-md text-sm font-medium capitalize text-white/75 xl:text-right text-center'>Certificate Achieved</h2>
              </div>
            </div>

          </div>

          <Skills />

          <Education />

        </div>
      </main>
    </>
  )
}

export default About