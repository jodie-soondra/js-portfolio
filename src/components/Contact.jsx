import React from 'react'
import styles from '../styles'
import {AiOutlineInstagram, AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id="contact" className={`p-20 ${styles.flexCenter}`}>
        <a href="mailto:jodie.soondra@gmail.com?subject=Contact - Portfolio" target="_blank" rel="noreferrer">
          <AiOutlineMail color="white" className={`${styles.contactIcons} p-3`} />
        </a>
        <a href="https://www.linkedin.com/in/jodie-soondra-9a58b124b/" target="_blank" rel="noreferrer">
          <AiFillLinkedin color="white" className={`${styles.contactIcons} p-3`}/>
        </a>
        <a href="https://github.com/jodie-soondra" target="_blank" rel="noreferrer">
          <AiOutlineGithub color="white" className={`${styles.contactIcons} p-3`}/>
        </a>
    </div>
  )
}

export default Contact
