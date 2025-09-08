"use client";

import { useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";

export default function Skills() {
  const containerRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    const gridItems = container.querySelectorAll(".Grid-items");
    const firstItem = container.querySelector(".Grid-items");

    const highlightColors = [
      "#E24E1B",
      "#58E6D9",
      "#F79824",
      "#818D92",
      "#58BC5A",
      "#2176FF",
      "#B63E96",
      "#22AAA1",
    ];

    gridItems.forEach((item, index) => {
      item.dataset.color = highlightColors[index % highlightColors.length];
    });

    const moveToElement = (element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        highlight.style.backgroundColor = element.dataset.color;
      }
    };

    const moveHighlight = (e) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement && hoveredElement.classList.contains("Grid-items")) {
        moveToElement(hoveredElement);
      } else if (
        hoveredElement &&
        hoveredElement.parentElement &&
        hoveredElement.parentElement.classList.contains("Grid-items")
      ) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    const handleTouch = (e) => {
      const touch = e.touches[0];
      const hoveredElement = document.elementFromPoint(
        touch.clientX,
        touch.clientY
      );
      if (hoveredElement && hoveredElement.classList.contains("Grid-items")) {
        moveToElement(hoveredElement);
      } else if (
        hoveredElement &&
        hoveredElement.parentElement &&
        hoveredElement.parentElement.classList.contains("Grid-items")
      ) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    if (firstItem) {
      moveToElement(firstItem);
    }

    container.addEventListener("mousemove", moveHighlight);
    container.addEventListener("touchmove", handleTouch);
    container.addEventListener("touchstart", handleTouch);

    return () => {
      container.removeEventListener("mousemove", moveHighlight);
      container.removeEventListener("touchmove", handleTouch);
      container.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  return (
    <div className="w-full text-white min-h-screen">
      <AnimatedText
        text="Technical Skills"
        className="sm:!text-5xl !text-4xl pb-10 sm:pb-0 pt-50"
      />

      <div
        className="relative w-full flex justify-center items-center px-4 py-8 sm:py-16 lg:py-0 lg:h-[100svh]"
        ref={containerRef}
      >
        {/* Desktop Grid Layout */}
        <div className="hidden lg:block Grid relative mx-auto w-full h-[62%] border border-white/20">
          <div className="Grid-row flex h-1/2">
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="flex flex-col gap-2 items-center justify-center relative z-[2]">
                <div className="text-xl flex gap-1">
                  <i className="devicon-mongodb-plain"></i>
                  <i className="devicon-express-original"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-nodejs-plain"></i>
                </div>
                <span className="text-4xl xl:text-4xl font-bold">MERN</span>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-java-plain text-5xl xl:text-6xl"></i>
                <span className="text-4xl font-bold">Java</span>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-python-plain text-5xl"></i>
                <span className="text-2xl xl:text-3xl font-bold">Python</span>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-amazonwebservices-plain-wordmark text-8xl"></i>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-threejs-original-wordmark text-8xl"></i>
              </div>
            </div>
          </div>

          <div className="Grid-row flex h-1/2 border-t border-white/20">
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-django-plain-wordmark text-7xl xl:text-8xl"></i>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-flask-original-wordmark text-7xl xl:text-8xl"></i>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-nextjs-original-wordmark text-7xl xl:text-8xl"></i>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-framermotion-original-wordmark text-8xl xl:text-9xl"></i>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-azuresqldatabase-plain text-7xl"></i>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full border-r border-white/20">
              <div className="relative z-[2] flex gap-2 items-center justify-center">
                <i className="devicon-postgresql-plain-wordmark text-7xl"></i>
              </div>
            </div>
            <div className="Grid-items flex-1 flex justify-center items-center h-full">
              <div className="relative z-[2] flex flex-col gap-2 items-center justify-center">
                <i className="devicon-github-original text-7xl"></i>
                <span className="text-xs xl:text-sm">Git & Github</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Grid Layout */}
        <div className="lg:hidden Grid relative mx-auto w-full max-w-4xl border border-white/20">
          {/* Mobile: 2x6 grid, Tablet: 3x4 grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0">
            <div className="Grid-items aspect-square flex justify-center items-center border-r border-b border-white/20 sm:border-r">
              <div className="flex flex-col gap-1 items-center justify-center relative z-[2] text-center">
                <div className="text-xl flex gap-1">
                  <i className="devicon-mongodb-plain"></i>
                  <i className="devicon-express-original"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-nodejs-plain"></i>
                </div>
                <span className="text-2xl sm:text-4xl font-bold">MERN</span>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-b border-white/20 sm:border-r sm:border-b">
              <div className="relative z-[2] flex flex-col gap-1 items-center justify-center">
                <i className="devicon-java-plain text-5xl sm:text-6xl"></i>
                <span className="text-xl sm:text-4xl font-bold">Java</span>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-r border-b border-white/20 sm:border-b sm:border-r-0">
              <div className="relative z-[2] flex flex-col gap-1 items-center justify-center">
                <i className="devicon-python-plain text-4xl sm:text-5xl"></i>
                <span className="text-xl sm:text-4xl font-bold">Python</span>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-b border-white/20 sm:border-r sm:border-b">
              <div className="relative z-[2] flex items-center justify-center">
                <i className="devicon-amazonwebservices-plain-wordmark text-6xl sm:text-8xl"></i>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-r border-b border-white/20 sm:border-r sm:border-b">
              <div className="relative z-[2] flex items-center justify-center">
                <i className="devicon-threejs-original-wordmark text-6xl sm:text-8xl"></i>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-b border-white/20 sm:border-b sm:border-r-0">
              <div className="relative z-[2] flex items-center justify-center">
                <i className="devicon-django-plain-wordmark text-7xl sm:text-8xl"></i>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-r border-b border-white/20 sm:border-r sm:border-b">
              <div className="relative z-[2] flex items-center justify-center">
                <i className="devicon-flask-original-wordmark text-7xl sm:text-8xl"></i>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-b border-white/20 sm:border-r sm:border-b">
              <div className="relative z-[2] flex items-center justify-center">
                <i className="devicon-nextjs-original-wordmark text-7xl sm:text-8xl"></i>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-r border-b border-white/20 sm:border-b sm:border-r-0">
              <div className="relative z-[2] flex items-center justify-center">
                <i className="devicon-framermotion-original-wordmark text-8xl sm:text-8xl"></i>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-b border-white/20 sm:border-r sm:border-b">
              <div className="relative z-[2] flex items-center justify-center">
                <i className="devicon-azuresqldatabase-plain text-6xl sm:text-7xl"></i>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center border-r border-white/20 sm:border-r sm:border-b-0">
              <div className="relative z-[2] flex items-center justify-center">
                <i className="devicon-postgresql-plain-wordmark text-6xl sm:text-7xl"></i>
              </div>
            </div>

            <div className="Grid-items aspect-square flex justify-center items-center sm:border-b-0">
              <div className="relative z-[2] flex flex-col gap-1 items-center justify-center">
                <i className="devicon-github-original text-6xl sm:text-7xl"></i>
                <span className="text-xs sm:text-sm">Git & Github</span>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={highlightRef}
          className="absolute top-0 left-0 bg-white pointer-events-none transition-all duration-[250ms] ease-in-out opacity-80"
        ></div>
      </div>
    </div>
  );
}
