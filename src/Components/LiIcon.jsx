import React from 'react'
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    });

    return (
        <>
            <figure className='absolute left-0 stroke-white'>
                <svg className='-rotate-90 sm:w-[75px] sm:h-[75px] w-[50px] h-[50px]' width="75" height="75" viewBox='0 0 100 100'>
                    <circle cx="75" cy="50" r="20" className='stroke-[#B63E96] stroke-1 fill-none' />
                    <motion.circle style={{ pathLength: scrollYProgress }} cx="75" cy="50" r="20" className='stroke-[5px] fill-black' />
                    <circle cx="75" cy="50" r="10" className='stroke-1 animate-pulse fill-[#B63E96]' />
                </svg>
            </figure>

        </>
    )
}

export default LiIcon