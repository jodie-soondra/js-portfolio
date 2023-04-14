import React from 'react'
import styles from '../styles'
import {AiOutlineInstagram, AiOutlineMail, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id="contact" className={`p-20 ${styles.flexCenter}`}>
        <AiOutlineMail color="white" className={`${styles.contactIcons} p-3`} />
        <AiFillLinkedin color="white" className={`${styles.contactIcons} p-3`}/>
        <AiOutlineInstagram color="white" className={`${styles.contactIcons} p-3`}/>
        <AiOutlineGithub color="white" className={`${styles.contactIcons} p-3`}/>
    </div>
  )
}

export default Contact