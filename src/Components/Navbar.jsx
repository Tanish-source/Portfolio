import { useState } from "react";
import ShareButton from "@/Components/ui/share-button";
import { Facebook, Twitter, Linkedin, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const CustomMobileLink = ({ to, title, className = "", toggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    toggle();
    navigate(to);
  };

  return (
    <button
      className={`${className} relative group text-black cursor-pointer`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
          h-[1px] inline-block bg-black
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${location.pathname === to ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const links = [
    {
      icon: Facebook,
      onClick: () =>
        window.open(`https://www.facebook.com/gitaben.patel.18488`, "_blank"),
    },
    {
      icon: Twitter,
      onClick: () => window.open(`https://x.com/tanish__29`, "_blank"),
    },
    {
      icon: Linkedin,
      onClick: () =>
        window.open(
          `https://www.linkedin.com/in/tanish-patel-99579b339/`,
          "_blank"
        ),
    },
    {
      icon: Github,
      onClick: () => window.open(`https://github.com/Tanish-source`, "_blank"),
    },
    {
      icon: Mail,
      onClick: () => window.open(`mailto:`, "_blank"),
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-20 w-full lg:px-28 px-6 sm:py-6 pt-6 font-medium flex items-center justify-between relative">
      <button
        onClick={handleClick}
        className="cursor-pointer sm:hidden flex flex-col justify-center items-center"
      >
        <span
          className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full sm:flex items-center justify-between hidden">
        <div className="flex flex-col justify-center items-center">
          <h2 className="tracking-[5px]">TANISH PATEL</h2>
          <h2 className="text-gray-500 text-sm">
            Passionate Full-Stack Developer
          </h2>
        </div>
        <ShareButton links={links}>Let's Connect</ShareButton>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="z-30 min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center gap-4 mb-6">
            <div className="flex flex-col justify-center items-center">
              <h2 className="tracking-[5px] text-black font-bold">
                TANISH PATEL
              </h2>
              <h2 className="text-gray-900 text-sm">
                Passionate Full-Stack Developer
              </h2>
            </div>
          </nav>
          <ShareButton links={links}>Let's Connect</ShareButton>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
