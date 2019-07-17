import React from 'react'

const ImageWrapper = (props) => {
  return (
    <div className='image-wrapper' onMouseMove={props.moveTag}>
      <img className='image' src='flesh.jpg' alt='flesh' />
    </div>
  )
}

export default ImageWrapper
