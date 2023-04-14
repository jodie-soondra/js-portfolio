import React from 'react'
import styles from '../styles'
import {flydreamair, atom, blockchain, server} from '../assets'

const Projects
 = () => {
  return (
    <div id="projects" className="mt-[350px]">
        <div>
            <h2 className={`${styles.heading2} text-pastelOrange mb-1`}>Projects</h2>
        </div>
        
        <div className={`flex flex-col`}>
            <p className={`${styles.paragraph}`}>Below are four sample projects undertaken during my studies. I have completed other projects on UI/UX design, software development, cybersecurity, algorithms and data structures and database management - but have selected these as my more major projects that cover a broad spectrum.</p>

            {/*Airline UI */}
            <div className={`flex md:flex-row flex-col mb-16 mt-16`}>
                <div className={``}>
                    <a href="https://xd.adobe.com/view/265be9c1-8afc-4226-8c9b-462cca7c4897-7308/?fullscreen" target="_blank" rel="noreferrer">
                        <img src={flydreamair} alt="airline website UI" className="object-cover w-[430px] h-[300px] rounded-[10px] hover:w-[500px] duration-200"/>
                    </a>
                </div>
                <div className="flex-row mt-10 md:mt-0 md:ml-10 w-[430px]">
                    <h4 className={`${styles.heading3}`}>Airline UI</h4>
                    <p className={`${styles.paragraph}`}>A sample airline company UI focused on the flight booking process. Designed in Xd, for a group project. Click the image for an interactable link.</p>
                </div>
            </div>

            {/*Atom */}
            <div className={`flex md:flex-row flex-col mb-16`}>
                <a href="https://github.com/jodie-soondra/opengl-atom-model" target="_blank" rel="noreferrer">
                    <img src={atom} alt="atom model" className="object-cover w-[430px] h-[300px] rounded-[10px] hover:w-[500px] duration-200"/>
                </a>
                <div className="flex-row mt-10 md:mt-0 md:ml-10 w-[430px]">
                    <h4 className={`${styles.heading3}`}>Atom Model</h4>
                    <p className={`${styles.paragraph}`}>An interactive atom model made in OpenGL focused on shaders, lighting and rotation interactions. Click the image for a link to the github repository.</p>
                </div>
            </div>

            {/*Blockchain */}
            <div className={`flex md:flex-row flex-col mb-16`}>
                <a href="https://github.com/jodie-soondra/python-blockchain-sim" target="_blank" rel="noreferrer">
                    <img src={blockchain} alt="command line blockchain sim" className="object-cover w-[430px] h-[300px] rounded-[10px] hover:w-[500px] duration-200"/>
                </a>
                <div className="flex-row mt-10 md:mt-0 md:ml-10 w-[430px]">
                    <h4 className={`${styles.heading3}`}>Blockchain Simulation</h4>
                    <p className={`${styles.paragraph}`}>A light blockchain system simulating proof-of-work, written in python and hosted on PubNub. The program is simulated between characters 'Alice' and 'Bob'. Each mine and then verify blocks using a nonce value such that the SHA256 hash of the block is less than 2<sup>236</sup> in hexadecimal format. Click the image for a link to the github repository and further report.</p>
                </div>
            </div>

            {/*Server teller */}
            <div className={`flex md:flex-row flex-col mb-16`}>
                <a href="https://github.com/jodie-soondra/server-teller-sim" target="_blank" rel="noreferrer">
                    <img src={server} alt="command line teller-customer simulation screenshot" className="object-cover w-[430px] h-[300px] rounded-[10px] hover:w-[500px] duration-200"/>
                </a>
                <div className="flex-row mt-10 md:mt-0 md:ml-10 w-[430px]">
                    <h4 className={`${styles.heading3}`}>Customer-Teller Simulation</h4>
                    <p className={`${styles.paragraph}`}>A discrete customer-teller simulation written in c++. The program operates on a text file containing 100 customer arrival and service times. The simulation can run with 1 - 4 tellers and will provide a report detailing overall simulation data as well as individual teller data. Click the image for a link to the github repository and further report.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
