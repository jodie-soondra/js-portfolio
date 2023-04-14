import React from 'react';
import './index.css';
import styles from './styles';
import {Hero, Navbar, Skills, Projects, Contact} from './components/';


function App() {
  return (
    <div className="App">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} fixed top-0 left-0 right-0 justify-center`}>
          <Navbar/>
        </div>
      </div>
      
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div> 

      <div className={`${styles.paddingX} ${styles.flexCenter} mt-[350px]`}>
        <div className={`${styles.boxWidth}`}>
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>

    </div>
  )
}

export default App
