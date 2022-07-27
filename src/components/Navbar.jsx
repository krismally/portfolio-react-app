import { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Resume from '../assets/01-Kris-Mally.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-10 bg-[#0a192f] text-gray-300'>
        <div>
            <h1 className='text-[#217763] text-3xl font-black tracking-wide'>Kris Mally</h1>
        </div>

        {/* menu */}
        
        <ul className='hidden md:flex'>
            <li>
                <Link to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
                <Link to='projects' smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='w-full text-gray-300 flex justify-between items-center' href="https://linkedin.com/in/kris-mally" target='_blank'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='w-full text-gray-300 flex justify-between items-center' href="https://github.com/krismally" target='_blank'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#217763]'>
                    <a className='w-full text-gray-300 flex justify-between items-center' href="mailto:kristophermally@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='w-full text-gray-300 flex justify-between items-center' href={Resume} target='_blank'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar