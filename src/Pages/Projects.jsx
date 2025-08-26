import React from "react";
import AnimatedText from "@/Components/AnimatedText";
import { Link } from "react-router-dom";
import PrepWise from '/images/projects/PrepWise.png';
import DigitalAgency from '/images/projects/DigitalAgency.png'
import TwoGood from '/images/projects/TwoGood.png'
import Cuberto from '/images/projects/Cuberto.png'
import SkillBarter from '/images/projects/SkillBarter.png'
import HireWise from '/images/projects/HireWise.png'
import TransitionEffect from "@/Components/TransitionEffect";

const FeturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex lg:flex-row flex-col items-start justify-between sm:rounded-3xl rounded-2xl border border-solid border-white sm:rounded-br-2xl rounded-br-xl bg-[#1b1b1b] shadow-2xl sm:p-12 p-4">
      <div
        className="absolute top-0 sm:-right-3 -right-2 -z-10 sm:w-[101%] w-full sm:h-[103%] h-[102%] sm:rounded-[2.5rem] rounded-[1.5rem] bg-white rounded-br-3xl"
      />
      <Link
        to={link}
        target="_blank"
        className="lg:w-1/2 w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <img src={img} alt={title} className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-[1.1]" />
      </Link>
      <div className="lg:w-1/2 w-full flex flex-col items-start justify-between lg:pl-6 pl-0">
        <span className="text-[#B63E96] font-medium sm:text-xl text-md">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left sm:text-4xl text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-white sm:text-md text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link to={github} target="_blank">
            <i className="devicon-github-original sm:text-4xl text-3xl"></i>
          </Link>
          <Link to={link} target="_blank" className="ml-4 sm:rounded-lg rounded-md bg-white text-black p-2 px-6 sm:text-lg text-md font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-start justify-center rounded-2xl border border-solid border-white bg-[#1b1b1b] sm:p-6 p-4 relative">
      <div
        className="absolute sm:top-0 top-0.5 -right-3 -z-10 w-[101%] sm:h-[103%] h-[102%] sm:rounded-[2rem] rounded-[1.5rem] bg-white rounded-br-3xl"
      />
      <Link
        to={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <img src={img} alt={title} className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-[1.1]" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-[#B63E96] font-medium sm:text-xl text-md">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left sm:text-3xl text-2xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-4 flex items-center justify-between">
          <Link to={link} target="_blank" className="sm:rounded-lg rounded-md bg-white text-black p-2 px-6 sm:text-lg text-md font-semibold">
            Visit Project
          </Link>
          <Link to={github} target="_blank">
            <i className="devicon-github-original text-4xl"></i>
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
      <div className="relative">
        <TransitionEffect />
      </div>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <div className="w-full h-full inline-block z-0 lg:p-20 p-8 pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="xl:!text-8xl sm:!text-7xl !text-5xl sm:mb-16 mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-6 sm:gap-8 md:gap-18 xl:gap-24 gap-y-24 xl:gap-y-32">

            {/* Featured Project - Full width always */}
            <div className="col-span-1 sm:col-span-2 xl:col-span-12">
              <FeturedProject
                title="SkillBarter - Learn Grow Together"
                summary="SkillBarter is a peer-to-peer learning platform where users exchange skills, earn credits, and access courses. It offers a credit-based course marketplace, AI study assistant, learner chat, progress tracking, and a recommendation engine that matches users by skills and interests. Built with Django, React, MongoDB, Tailwind, and AWS, it fosters collaborative, community-driven learning."
                type="Featured Project"
                img={SkillBarter}
                link="https://skillbarter-lms.vercel.app"
                github="https://github.com/Tanish-source"
              />
            </div>

            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="PrepWise - AI Mock Interview Platform"
                type="Featured Project"
                img={PrepWise}
                link="https://ai-mock-interview-app-iota.vercel.app"
                github="https://github.com/Tanish-source"
              />
            </div>

            {/* Another Featured Project - Full width */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="Digital Web Agency"
                type="Featured Project"
                img={DigitalAgency}
                link="https://digital-web-agency-t.vercel.app"
                github="https://github.com/Tanish-source"
              />
            </div>

            <div className="col-span-1 sm:col-span-2 xl:col-span-12">
              <FeturedProject
                title="HireWise - Your AI-Powered Career Companion."
                summary="HireWise is an AI-powered career platform that combines resume analysis, smart job browsing, and an employer admin panel with advanced tools like an AI Career Assistant and AI Mock Interviews with feedback. By uniting job search, preparation, and guidance in one place, it helps candidates stand out and achieve their dream careers."
                type="Featured Project"
                img={HireWise}
                link="https://github.com/Tanish-source"
                github="https://github.com/Tanish-source"
              />
            </div>

            {/* Two projects side-by-side on sm+, stacked on mobile */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="Two Good Foundation"
                type="Project"
                img={TwoGood}
                link="https://github.com/Tanish-source"
                github="https://github.com/Tanish-source"
              />
            </div>

            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="Cuberto"
                type="Project"
                img={Cuberto}
                link="https://cuberto-seven.vercel.app"
                github="https://github.com/Tanish-source"
              />
            </div>

          </div>

        </div>
      </main>
    </>
  );
};

export default Projects;
