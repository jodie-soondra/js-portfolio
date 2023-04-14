import React, {useState} from 'react';
import styles from '../styles';
import {SlClose, SlMenu} from 'react-icons/sl';
import {Link} from 'react-scroll';
//import {navLinks} from '../constants';

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <div className="bg-blue sm:px-16 px-6">
        <div className="flex py-6 navbar bg-blue justify-between items-center w-full">
          <h1 className={`${styles.heading1} z-[10]`}>JS.</h1>
          <ul className={`${styles.heading4} hidden sm:flex justify-end`}>
            <li className={`${styles.hoverOrange}`}><Link to="home" spy={true} smooth={true} offset={-90} duration={500}>Home</Link></li>
            <li className={`${styles.hoverOrange}`}><Link to="skills" spy={true} smooth={true} offset={-120} duration={500}>Skills</Link></li>
            <li className={`${styles.hoverOrange}`}><Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
            <li className={`${styles.hoverOrange}`}><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
          </ul>
          <div onClick={handleNav} className="block sm:hidden">
            {nav ? <SlMenu size={24} color="white"/> : <SlClose size={24} color="white"/>}
          </div>
      </div>

      <div className={!nav ? "sm:hidden fixed left-0 top-0 w-[60%] h-full border-r-2 border-cream border-opacity-75 bg-darkBlue ease-in-out duration-500" : "fixed left-[-100%]"}>
        <ul className={`${styles.heading4} p-4 mt-[100px]`}>
        <Link onClick={handleNav} to="home" spy={true} smooth={true} offset={-90} duration={500}>
          <li className={`${styles.hoverOrange} p-4 border-b-2 border-opacity-50 border-cream`}>
            Home
          </li>
        </Link>
        <Link onClick={handleNav} to="skills" spy={true} smooth={true} offset={-120} duration={500}>
          <li className={`${styles.hoverOrange} p-4 border-b-2 border-opacity-50 border-cream`}>
            Skills
          </li>
        </Link>
        <Link onClick={handleNav} to="projects" spy={true} smooth={true} offset={-100} duration={500}>
          <li className={`${styles.hoverOrange} p-4 border-b-2 border-opacity-50 border-cream`}>
            Projects
          </li>
        </Link>
        <Link onClick={handleNav} to="contact" spy={true} smooth={true} offset={50} duration={500}>
          <li className={`${styles.hoverOrange} p-4`}>Contact</li>
        </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar