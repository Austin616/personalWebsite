// ProjectsPage/index.js

import React, { useState } from 'react'
import './index.scss'

import huffman from '../../assets/images/huffmanpng.png'
import Hangman from '../../assets/images/hangman.jpg'
import Connect4 from '../../assets/images/connect4.png'
import Critters from '../../assets/images/screen.png'

const projectsData = [
  {
    title: 'Huffman Coding',
    description:
      'Compress and decompress different types of files using the Huffman algorithm.',
    imageUrl: huffman,
  },
  {
    title: 'Evil Hangman',
    description: 'A take on the classic Hangman game but with added difficulty by adding a changing dictionary and the program chooses the hardest word possible',
    imageUrl: Hangman,
  },
  {
    title: 'Critters',
    description: 'Used object-oriented programming to create a critter that would destroy all other critters in a simulation.',
    imageUrl: Critters,
  },
  // Add more projects as needed
  {
    title: 'Connect 4',
    description: 'Created a classic connect 4 game that the user can play with another user',
    imageUrl: Connect4,
  },
]



const ProjectsPage = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }

  const project = projectsData[currentProjectIndex]

  return (
    <div className="projects-page">
      <div className="project-container">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.imageUrl} alt={project.title} />
      </div>
      <button onClick={goToNextProject} className="arrow-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  )
}

export default ProjectsPage
