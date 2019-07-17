import React, { useEffect, useRef } from 'react'

const InputWrapper = ({
  enterPress,
  deleteTag,
  changeText,
  text,
  position,
  id
}) => {
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
        onChange={(e) => changeText(id, e)}
        value={text}
        autoFocus
      />
      <span className='close' ref={closeButton}>&times;</span>
    </div>
  )
}

export default InputWrapper
