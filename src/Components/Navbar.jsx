import { Link, useLocation, useNavigate } from "react-router-dom";
import ShareButton from "@/Components/ui/share-button";
import { Facebook, Twitter, Linkedin, Mail, Github, } from "lucide-react";
import { useState } from 'react';
import AnimatedText from '@/Components/AnimatedText';
import { motion } from "framer-motion";

const CustomLink = ({ to, title, className = "" }) => {
    const { pathname } = useLocation();
    const isActive = pathname === to;

    return (
        <Link to={to} className={`${className} relative group cursor-pointer`}>
            {title}
            <span
                className={`h-[2px] inline-block bg-white absolute left-0 -bottom-0.5 transition-[width] ease duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ to, title, className = "", toggle }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        toggle()
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
          dark:bg-light
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
                window.open(
                    `https://www.facebook.com/gitaben.patel.18488`,
                    "_blank"
                ),
        },
        {
            icon: Twitter,
            onClick: () =>
                window.open(
                    `https://x.com/tanish__29`,
                    "_blank"
                ),
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
            onClick: () =>
                window.open(
                    `https://github.com/Tanish-source`,
                    "_blank"
                ),
        },
        {
            icon: Mail,
            onClick: () =>
                window.open(
                    `mailto:`,
                    "_blank"
                ),
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="w-full lg:px-28 px-6 sm:py-6 pt-6 font-medium flex items-center justify-between relative">

            <button onClick={handleClick} className="cursor-pointer sm:hidden flex flex-col justify-center items-center">
                <span className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full sm:flex items-center justify-between hidden">
                <nav>
                    <CustomLink to="/" title='Home' className="mr-4" />
                    <CustomLink to="/about" title='About' className="mx-4" />
                    <CustomLink to="/projects" title='Projects' className="mx-4" />
                    <CustomLink to="/contact" title='Contact' className="ml-4" />
                </nav>
                <ShareButton links={links}>Let's Connect</ShareButton>
            </div>

            {
                isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="z-30 min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/75 rounded-lg backdrop-blur-md py-32">
                        <nav className="flex flex-col items-center justify-center gap-4 mb-4">
                            <AnimatedText text='TANISH PATEL' className='!text-3xl text-black mb-4' />
                            <CustomMobileLink to="/" title='Home' className="" toggle={handleClick} />
                            <CustomMobileLink to="/about" title='About' className="" toggle={handleClick} />
                            <CustomMobileLink to="/projects" title='Projects' className="" toggle={handleClick} />
                            <CustomMobileLink to="/contact" title='Contact' className="" toggle={handleClick} />
                        </nav>
                        <ShareButton links={links}>Let's Connect</ShareButton>
                    </motion.div>
                ) : null
            }

        </header>
    );
};

export default Navbar;
