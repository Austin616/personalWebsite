import React from 'react'
import './index.scss'
import Logo from '../../assets/images/longhorn.png'
import ProjectsPage from '../ProjectsPage' // Import the ProjectsPage component
import AnimatedLetters from '../Animated Letters'
import { useEffect, useState } from 'react'

const RightSide = () => {

const [letterClass, setLetterClass] = useState('text-animate')

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)

  // Cleanup function to clear the timeout when the component unmounts
  return () => clearTimeout(timeoutId)
}, [])


  return (
    <div className="right-side-container">
      <img src={Logo} alt="longhorn symbol" className="longhorn-symbol" />

      <h2>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c','t','s']}
          idx={15}
        />
      </h2>
      <ProjectsPage />
    </div>
  )
}

export default RightSide
