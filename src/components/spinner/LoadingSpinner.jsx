import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className='loading-overlay'>
        <div className="text">
         <p className="loading-text">
          {'ICAST SCHOOLS.......'.split('').map((letter, index) => (
            <span key={index} className={`letter letter-${index % 5}`}>
              {letter}
            </span>
          ))}
        </p>
      </div>
        <div className="spinner">
        </div>
    </div>
  )
}

export default LoadingSpinner