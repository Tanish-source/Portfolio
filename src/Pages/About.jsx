import React, { useEffect, useRef } from "react";
import AnimatedText from "../Components/AnimatedText";
import ProfilePicture from "/images/profile/profile.png";
import Skills from "@/Components/Skills";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Education from "@/Components/Education";
import TransitionEffect from "@/Components/TransitionEffect";
import { CardSpotlight } from "@/Components/ui/card-spotlight";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} className="text-center font-cash"></span>;
};

const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center mb-10">
        <div className="w-full h-full inline-block z-0 sm:p-20 p-5 pt-16">
          <AnimatedText
            text="About me"
            className="sm:mb-14 mb-8 sm:!text-5xl !text-4xl"
          />
          <div className="grid w-full grid-cols-12 auto-rows-[minmax(180px,_auto)] gap-x-6 gap-y-4 items-stretch">
            {/* Top: Biography and Portrait split into two rows */}
            <div className="col-span-12 md:col-span-9 flex items-center justify-center">
              <CardSpotlight className="h-full w-full min-h-[180px] flex flex-col items-center justify-center text-left">
                <h2 className="mb-4 text-xl font-cash font-medium uppercase text-white/75">
                  Biography
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  I'm Tanish, a Full-Stack Developer skilled in MERN, Django,
                  Flask, and REST APIs — creating everything from sleek,
                  responsive front-end interfaces to scalable, secure back-end
                  systems. My front-end work focuses on clean design, smooth
                  animations, and performance optimization, while my back-end
                  expertise ensures robustness and efficiency.
                </p>
              </CardSpotlight>
            </div>
            <div className="col-span-12 md:col-span-3 flex items-center justify-center">
              <CardSpotlight className="h-full w-full min-h-[180px] flex items-center justify-center">
                <img
                  src={ProfilePicture}
                  alt="Profile picture"
                  className="w-34 h-34 md:w-34 md:h-34 rounded-full object-cover border border-white/20"
                />
              </CardSpotlight>
            </div>

            {/* Row 2: two small stats + wide description */}
            <div className="col-span-12 sm:col-span-2 flex items-center justify-center">
              <CardSpotlight className="h-full w-full min-h-[140px] flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-medium">
                  <AnimatedNumbers value={18} />+
                </span>
                <h3 className="text-sm font-medium text-white/75 mt-2">
                  Completed Projects
                </h3>
              </CardSpotlight>
            </div>

            <div className="col-span-12 sm:col-span-2 flex items-center justify-center">
              <CardSpotlight className="h-full w-full min-h-[140px] flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-medium">
                  <AnimatedNumbers value={2} />+
                </span>
                <h3 className="text-sm font-medium text-white/75 mt-2">
                  Years <br /> Learning
                </h3>
              </CardSpotlight>
            </div>

            <div className="col-span-12 sm:col-span-8 flex items-center justify-center">
              <CardSpotlight className="h-full w-full min-h-[140px] flex flex-col items-center justify-center text-left">
                <p className="text-sm text-white/80 leading-relaxed">
                  I also bring AI integration skills at a medium level, using
                  APIs and models to enhance functionality, personalize user
                  experiences, and automate workflows. Passionate about blending
                  creativity with technical precision, I stay up to date with
                  emerging technologies to deliver solutions that are reliable,
                  engaging, and future-ready.
                </p>
              </CardSpotlight>
            </div>

            {/* Row 3: UI/UX Expert badge with logo and shooting text */}
            <div className="col-span-12 sm:col-span-4 flex items-center justify-center">
              <CardSpotlight className="h-full w-full min-h-[120px] flex flex-col items-center justify-center text-center gap-3">
                {/* UI/UX logo (using a modern icon) */}
                <span className="inline-flex h-12 w-12 mb-2 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500/20 to-blue-400/20 text-pink-400 text-3xl shadow-lg">
                  <i className="fas fa-pen-nib"></i>
                </span>
                <div className="leading-tight space-y-2">
                  <div className="text-xl font-cash font-medium">UI/UX Expert</div>
                  <div className="text-xs text-white/70 w-60">
                    Crafting beautiful, intuitive, and impactful digital
                    experiences.
                  </div>
                </div>
              </CardSpotlight>
            </div>

            <div className="col-span-12 sm:col-span-5 flex items-center justify-center">
              <CardSpotlight className="h-full w-full min-h-[120px] flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-medium mt-2">
                  <AnimatedNumbers value={22} />+
                </span>
                <div>
                  <h3 className="text-sm font-medium text-white/75 mt-2">
                    Technologies Learned
                  </h3>
                </div>
              </CardSpotlight>
            </div>

            <div className="col-span-12 sm:col-span-3 flex items-center justify-center">
              <CardSpotlight className="h-full w-full min-h-[120px] flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-medium mt-2">
                  <AnimatedNumbers value={4} />+
                </span>
                <div>
                  <h3 className="text-sm font-medium text-white/75 mt-2">
                    Certificates Archived
                  </h3>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
