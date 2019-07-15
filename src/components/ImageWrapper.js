import React from 'react'

const ImageWrapper = (props) => {
  return (
    <div className='image-wrapper' onMouseMove={props.onMouseMove}>
      <img className='image' src='flesh.jpg' alt='flesh' />
    </div>
  )
}

export default ImageWrapper
