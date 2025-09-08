import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import LiIcon from "@/Components/LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 md:w-[60%] sm:w-[70%] w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h3 className="sm:text-2xl text-xl font-bold capitalize">{type}</h3>
        <span className="capitalize font-medium text-white/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const educationData = [
    {
      type: "Bachelor Of Engineering In Information Technology",
      time: "2023-2024",
      place: "LJ Institute Of Engineering and Technology",
      info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
    },
    {
      type: "Online Coursework",
      time: "2023-2025",
      place: "TCS, IBM And Coursera",
      info: "Completed coursework in topics such as Exploratory Data Analysis for Machine Learning , Career Edge – Young Professional course, and Frontend Development.",
    },
    {
      type: "10th & 12th",
      time: "2019-2022",
      place: "Sahajanand Secondary School",
      info: "Completed 10th and 12th with a focus on science and mathematics, laying the groundwork for a career in technology.",
    },
  ];

  return (
    <>
      <div className="my-40 mt-20 mb-0">
        <AnimatedText
          className="!text-5xl sm:!text-6xl sm:mb-28 mb-20"
          text="Education"
        />

        <div ref={ref} className="md:w-[75%] mx-auto relative w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute sm:left-9 left-6 top-0 sm:w-[4px] w-[3px] h-full bg-[#B63E96] origin-top"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {educationData.map((item, index) => (
              <Details
                key={index}
                type={item.type}
                time={item.time}
                place={item.place}
                info={item.info}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
