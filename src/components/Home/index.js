import LogoTitle from '../../assets/images/Alogo.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../Animated Letters'
import Loader from 'react-loaders'
import RightSide from '../Right Side'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['u','s','t','i','n']
  const jobArray = ['s','o','f','t','w','a','r','e',' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',]

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)

        // Cleanup function to clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId)
      }, [])

    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>University of Texas Computer Science</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <RightSide />
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home
