import React from 'react'
import styles from '../styles'
import {AiOutlineInstagram, AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id="contact" className={`p-20 ${styles.flexCenter}`}>
        <a href="mailto:jodie.soondra@gmail.com?subject=Contact - Portfolio" target="_blank">
          <AiOutlineMail color="white" className={`${styles.contactIcons} p-3`} />
        </a>
        <a href="https://www.linkedin.com/in/jodie-soondra-9a58b124b/" target="_blank">
          <AiFillLinkedin color="white" className={`${styles.contactIcons} p-3`}/>
        </a>
        <a href="https://github.com/jodie-soondra" target="_blank">
          <AiOutlineGithub color="white" className={`${styles.contactIcons} p-3`}/>
        </a>
        <a href="https://www.instagram.com/jodiesoondra/?hl=en" target="_blank">
          <AiOutlineInstagram color="white" className={`${styles.contactIcons} p-3`}/>
        </a>
        
    </div>
  )
}

export default Contact