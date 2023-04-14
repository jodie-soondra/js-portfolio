import React from 'react'
import styles from '../styles'

export const Hero = () => {
  return (
    <div id="home" className={`pt-[50px] flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-sans font-semibold ss:text-[72px] text-[52px] text-cream ss:leading-[90px] leading-[60px]">Hello, my name <br/> {""}is
            <span className="text-pastelOrange"> Jodie Soondra.</span> {""}
          </h1>
      </div>
      <div>
          <p className={`${styles.bigParagraph} max-w-[470px] mt-3`}>
            I am a computer science student currently studying at UOW and majoring in cybersecurity.
          </p> 
      </div>
    </div>
  )
}

export default Hero