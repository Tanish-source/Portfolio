import React from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import AnimatedText from "@/Components/AnimatedText";
import { Link } from "react-router-dom";
import PrepWise from "/images/projects/PrepWise.png";
import DigitalAgency from "/images/projects/DigitalAgency.png";
import TwoGood from "/images/projects/TwoGood.png";
import Cuberto from "/images/projects/Cuberto.png";
import SkillBarter from "/images/projects/SkillBarter.png";
import HireWise from "/images/projects/HireWise.png";
import BlobMixer from "/images/projects/BlobMixer.png";
import Zajnocom from "/images/projects/Zajno.com.png";
import ThePlanets from "/images/projects/The-Planets.png";
import Skills from "@/Components/Skills";
import Education from "@/Components/Education";

const Project = ({ title, img, link }) => {
  let hostname = new URL(link).hostname.replace(/^www\./, "");
  return (
    <article className="w-full group">
      <Link
        to={link}
        target="_blank"
        className={`
          block bg-black rounded-xl overflow-hidden cursor-pointer
          transition-transform duration-300
          group-hover:-translate-y-1
          group-hover:shadow-lg
          group-hover:shadow-[#000]/40
        `}
        style={{
          willChange: "transform, box-shadow",
        }}
      >
        <div className="px-4 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-sm rounded-t-none bg-[#181818] sm:px-10 px-4 py-1.5 text-[10px] text-gray-400">
            <Lock className="size-2" />
            <span className="font-medium">{hostname}</span>
          </div>
        </div>
        <div className="p-2">
          <div className="overflow-hidden aspect-[16/9] w-full">
            <img
              src={img}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01] rounded-sm"
            />
          </div>
          <div className="w-full py-4 px-2 flex items-center justify-between">
            <h2 className="text-left text-xl font-cash font-medium tracking-wide">
              {title}
            </h2>
            <ArrowUpRight />
          </div>
        </div>
      </Link>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <div className="w-full h-full inline-block z-0 lg:p-20 p-8 pt-16">
          <AnimatedText
            text="Work"
            className="!text-5xl sm:!text-6xl sm:mb-20 mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-6 sm:gap-8 md:gap-18 xl:gap-24 gap-y-24 xl:gap-y-32">
            {/* Featured Project - Full width always */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="SkillBarter - Learn Grow Together"
                type="Featured Project"
                img={SkillBarter}
                link="https://skillbarter-lms.vercel.app"
                github="https://github.com/Tanish-source"
              />
            </div>

            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="HireWise - Your AI-Powered Career Companion."
                img={HireWise}
                link="https://github.com/Tanish-source"
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

            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="PrepWise - AI Mock Interview Platform"
                type="Featured Project"
                img={PrepWise}
                link="https://ai-mock-interview-app-iota.vercel.app"
                github="https://github.com/Tanish-source"
              />
            </div>

            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="Zajno.com"
                type="Project"
                img={Zajnocom}
                link="https://zajno-com-sage.vercel.app"
                github="https://github.com/Tanish-source"
              />
            </div>

            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="Blob Mixer – Interactive 3D Playground"
                img={BlobMixer}
                link="https://blobmixer-ten.vercel.app"
                github="https://github.com/Tanish-source"
              />
            </div>

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

            <div className="col-span-1 sm:col-span-1 xl:col-span-6">
              <Project
                title="The-Planets"
                type="Project"
                img={ThePlanets}
                link="https://github.com/Tanish-source"
                github="https://github.com/Tanish-source"
              />
            </div>
          </div>

          <Skills />

          <Education />
        </div>
      </main>
    </>
  );
};

export default Projects;
