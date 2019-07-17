import React, { useRef, useEffect } from 'react'

const ImageWrapper = (props) => {
  const imageWrapper = useRef(null)

  useEffect(() => {
    const imageWrapperCurrent = imageWrapper.current
    imageWrapperCurrent.addEventListener('mousemove', props.moveTag)
    return () => {
      imageWrapperCurrent.removeEventListener('mousemove', props.moveTag)
    }
  })

  return (
    <div className='image-wrapper' ref={imageWrapper}>
      <img className='image' src='flesh.jpg' alt='flesh' />
    </div>
  )
}

export default ImageWrapper
