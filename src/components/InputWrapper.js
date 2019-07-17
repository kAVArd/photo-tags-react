import React, { useEffect, useRef } from 'react'

const InputWrapper = ({ enterPress, deleteTag, changeValue, value, position }) => {
  const styleWrapper = {
    left: position.x + 'px',
    top: position.y + 'px'
  }

  const input = useRef(null)
  const closeButton = useRef(null)

  useEffect(() => {
    const inputCurrent = input.current
    const closeButtonCurrent = closeButton.current

    inputCurrent.addEventListener('keypress', enterPress)
    closeButtonCurrent.addEventListener('click', deleteTag)

    return () => {
      inputCurrent.removeEventListener('keypress', enterPress)
      closeButtonCurrent.removeEventListener('click', deleteTag)
    }
  }, [enterPress, deleteTag])

  return (
    <div className='input-wrapper' style={styleWrapper}>
      <input
        type='text'
        size='15'
        className='form-control tag-input'
        placeholder='Enter tag text'
        ref={input}
        onChange={changeValue}
        value={value}
        autoFocus
      />
      <span className='close' ref={closeButton}>&times;</span>
    </div>
  )
}

export default InputWrapper
