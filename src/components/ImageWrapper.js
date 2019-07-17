import React, { useRef, useEffect } from 'react'

const ImageWrapper = ({ moveTag }) => {
  const imageWrapper = useRef(null)

  useEffect(() => {
    const imageWrapperCurrent = imageWrapper.current
    imageWrapperCurrent.addEventListener('mousemove', moveTag)
    return () => {
      imageWrapperCurrent.removeEventListener('mousemove', moveTag)
    }
  })

  return (
    <div className='image-wrapper' ref={imageWrapper}>
      <img className='image' src='flesh.jpg' alt='flesh' />
    </div>
  )
}

export default ImageWrapper
