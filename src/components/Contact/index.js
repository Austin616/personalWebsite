import Loader from "react-loaders";
import './index.scss'
import AnimatedLetters from '../Animated Letters'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)

      // Cleanup function to clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId)
    }, [])

    return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                letterClass={letterClass}
                idx={15}
              />
            </h1>
            <p>
              I am open and interested in software developement internships.
              Feel free to contact me below using the form.
            </p>
            <div className="contact-form">
              <form>
                <ul>
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeHolder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeHolder="Email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="info-map">
            Austin Tran
            <br />
            United States of America
            <br />
            University of Texas at Austin <br />
            Austin, Texas <br />
            <br />
            <span>austintran616@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[30.2849, -97.7341]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[30.2849, -97.7341]}>
                <Popup>Hook Em! Austin Tran goes to school here :)</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Contact