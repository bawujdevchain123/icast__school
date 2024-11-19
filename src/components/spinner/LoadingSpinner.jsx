import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className='loading-overlay'>
        <div className="spinner">
        </div>
        <div className='text'>
        <p className="loading-text">Loading.......</p>
        </div>
    </div>
  )
}

export default LoadingSpinner