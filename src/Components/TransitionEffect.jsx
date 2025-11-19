import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#39689B]' />

            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.2, duration: 0.7, ease: 'easeInOut' }}
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-black' />

            <motion.div
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.4, duration: 0.7, ease: 'easeInOut' }}
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-white' />
        </>
    )
}

export default TransitionEffect