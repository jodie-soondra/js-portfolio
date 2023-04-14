import React, {useState} from 'react';
import styles from '../styles';
import {SlClose, SlMenu} from 'react-icons/Sl';
import {Link} from 'react-scroll';
//import {navLinks} from '../constants';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <h1 className={`${styles.heading1} z-[10]`}>JS.</h1>
      <ul className={`${styles.heading4} hidden sm:flex`}>
        <li className={`${styles.hoverOrange}`}><Link to="home" spy={true} smooth={true} offset={-110} duration={500}>Home</Link></li>
        <li className={`${styles.hoverOrange}`}><Link to="skills" spy={true} smooth={true} offset={-90} duration={500}>Skills</Link></li>
        <li className={`${styles.hoverOrange}`}><Link to="projects" spy={true} smooth={true} offset={-40} duration={500}>Projects</Link></li>
        <li className={`${styles.hoverOrange}`}><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
      </ul>

      <div onClick={handleNav} className="block sm:hidden">
        {!nav ? <SlMenu size={24} color="white"/> : <SlClose size={24} color="white"/>}
      </div>

      {/*TODO make sure both menus stay pinned to top*/}
      {/*TODO scroll to in mobile menu, stop auto open in mobile veiw */}
      <div className={!nav ? "sm:hidden fixed left-0 top-0 w-[60%] h-full border-r-2 border-cream border-opacity-75 bg-darkBlue ease-in-out duration-500" : "fixed left-[-100%]"}>
        <ul className={`${styles.heading4} p-4 mt-[100px]`}>
          <li className={`${styles.hoverOrange} p-4 border-b-2 border-opacity-50 border-cream`}>Home</li>
          <li className={`${styles.hoverOrange} p-4 border-b-2 border-opacity-50 border-cream`}>Skills</li>
          <li className={`${styles.hoverOrange} p-4 border-b-2 border-opacity-50 border-cream`}>Projects</li>
          <li className={`${styles.hoverOrange} p-4`}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar