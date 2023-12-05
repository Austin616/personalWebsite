import './index.scss'
import AnimatedLetters from '../Animated Letters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As a sophomore at the University of Texas at Austin, I am eager to
            dive into the world of big data and software engineering. My goal is
            to secure a challenging role in a prominent IT company, where I can
            apply my skills and work with cutting-edge technologies on diverse
            and impactful projects.
          </p>
          <p align="left">
            I approach my academic and professional journey with confidence,
            fueled by a natural curiosity to explore the intricate world of
            software development. Continuously honing my skills, I embrace each
            design problem as an opportunity for growth and improvement.
          </p>
          <p>
            Beyond my academic pursuits, I am a gym goer and I play a lot of video games in my spare time. I am excited for what the future holds for me. Above
            all, I am tech-obsessed and excited about the endless possibilities
            in the realm of big data and software engineering.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
