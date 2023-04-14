import React from 'react'
import styles from '../styles'

const Projects
 = () => {
  return (
    <div id="projects" className="mt-[350px]">
        <div>
            <h2 className={`${styles.heading2} text-pastelOrange mb-5`}>Projects</h2>
        </div>
        <div className={`flex flex-col`}>
            <div className={`flex md:flex-row flex-col mb-10`}>
                <div className={`w-[430px] h-[300px] bg-cream rounded-[10px]`}>
                    
                </div>
                <div className="flex-row mt-10 md:mt-0 md:ml-10 w-[430px]">
                    <h4 className={`${styles.heading3}`}>Airline UI</h4>
                    <p className={`${styles.paragraph}`}>A sample airline company UI focused on the flight booking process. Designed in Figma, for a group project.</p>
                </div>
            </div>

            <div className={`flex md:flex-row flex-col`}>
                <div className={`w-[430px] h-[300px] bg-cream rounded-[10px]`}>
                    
                </div>
                <div className="flex-row mt-10 md:mt-0 md:ml-10 w-[430px]">
                    <h4 className={`${styles.heading3}`}>Airline UI</h4>
                    <p className={`${styles.paragraph}`}>A sample airline company UI focused on the flight booking process. Designed in Figma, for a group project.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
