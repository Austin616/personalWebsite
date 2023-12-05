import React from 'react';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx, customColor }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`} style={{ color: customColor }}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;
