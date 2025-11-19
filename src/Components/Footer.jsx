import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="w-full border-t-2 border-solid border-white font-medium text-lg">
                <div className='w-full z-0 flex md:flex-row flex-col items-center justify-between lg:p-32 lg:py-8 px-6 py-6'>
                    <span className="sm:text-md text-sm">{new Date().getFullYear()} &copy; All Rights Reserved</span>
                    <div className='flex items-center sm:py-1 py-2 sm:text-md text-sm'>
                        Build With <span className='text-[#39689B] sm:text-2xl text-xl px-1'>&#9825;</span> by&nbsp;<Link href="/" className="underline underline-offset-2">TANISH PATEL</Link>
                    </div>
                    <Link to='mailto:tanishdpatel29112005@gmail.com' className="underline underline-offset-2 sm:text-md text-sm">Say Hello</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer