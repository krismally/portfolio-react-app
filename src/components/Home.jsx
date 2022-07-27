import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
    
        <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full'>
            <p className='text-[#217763] text-lg'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kris Mally</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I specialize in crafting beautiful digital experiences. Currently, I'm focused on building well-designed, responsive full-stack web applications.</p>
            <div>
                <Link to='projects' smooth={true} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#217763]'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-2' />
                    </span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home