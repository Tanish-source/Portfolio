import React from 'react'
import AnimatedText from '@/Components/AnimatedText'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import TransitionEffect from '@/Components/TransitionEffect'

const Home = () => {
    return (
        <>
            <TransitionEffect />
            <main className='flex items-center w-full min-h-screen -my-20'>
                <div className='w-full h-full inline-block z-0 sm:p-20 p-5 pt-0'>
                    <div className='flex items-center justify-center h-full'>
                        <div className='lg:w-[80%] md:w-full flex flex-col items-center self-center'>
                            <AnimatedText text='Turning Vision Into Reality With Code' className='lg:text-8xl sm:text-7xl text-[59px]' />
                            <p className='text-center lg:text-base text-sm font-medium sm:w-[75%] w-full sm:my-4 my-8'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                                Explore my latest projects, showcasing my expertise in React.js and web development.</p>
                            <div className='flex gap-4 items-center self-center mt-2'>
                                <Link to='/Resume.pdf' target='_blank' className='flex gap-2 items-center hover:bg-[#1b1b1b] hover:text-white sm:p-2.5 sm:px-6 p-2 px-4 rounded-lg sm:text-lg text:md font-semibold bg-[#f5f5f5] text-black border-2 border-solid border-transparent hover:border-white' download={true}>Resume<ExternalLink /></Link>
                                <Link to='mailto:tanishdpatel29112005@gmail.com' className='sm:text-lg text-md font-medium capitalize underline'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home