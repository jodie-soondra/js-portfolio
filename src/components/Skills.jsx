import React from 'react'
import styles, {layout} from '../styles'
import { DiMysql, DiReact, DiPython, DiUnitySmall, DiHtml5, DiGit } from 'react-icons/di'
import {SiTailwindcss, SiAdobeillustrator, SiAdobexd, SiAdobeindesign, SiCplusplus, SiJavascript, SiOpengl, SiFigma} from 'react-icons/si'
import {BsFiletypeJava} from 'react-icons/bs'

const Skills = () => {
  return (
    <div id="skills" className={`flex flex-col ${styles.paddingX} ${styles.paddingY} bg-cream rounded-[10px] box-shadow`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2} `}>Technical Skills</h2>
        </div>
        <div className="items-start flex flex-wrap">
            <div className={`${styles.iconWrap}`}>
                <DiMysql className={`${styles.iconSizing}`}/>
                <p>MySql</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <DiReact className={`${styles.iconSizing}`}/>
                <p>React</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <SiTailwindcss className={`${styles.iconSizing}`}/>
                <p>Tailwind</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <SiAdobeillustrator className={`${styles.iconSizing}`}/>
                <p>Illustrator</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <SiAdobexd className={`${styles.iconSizing}`}/>
                <p>Xd</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <SiAdobeindesign className={`${styles.iconSizing}`}/>
                <p>Indesign</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <SiFigma className={`${styles.iconSizing}`}/>
                <p>Figma</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <SiCplusplus className={`${styles.iconSizing}`}/>
                <p>C++</p>
            </div>
            
            <div className={`${styles.iconWrap}`}>
                <BsFiletypeJava className={`${styles.iconSizing}`}/>
                <p>Java</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <SiJavascript className={`${styles.iconSizing}`}/>
                <p>Javascript</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <DiPython className={`${styles.iconSizing}`}/>
                <p>Python</p>
            </div>
            
            <div className={`${styles.iconWrap}`}>
                <DiHtml5 className={`${styles.iconSizing}`}/>
                <p>Html</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <SiOpengl className={`${styles.iconSizing}`}/>
                <p>OpenGl</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <DiUnitySmall className={`${styles.iconSizing}`}/>
                <p>Unity</p>
            </div>

            <div className={`${styles.iconWrap}`}>
                <DiGit className={`${styles.iconSizing}`}/>
                <p>Git</p>
            </div>
        </div>
    </div>
  )
}

export default Skills