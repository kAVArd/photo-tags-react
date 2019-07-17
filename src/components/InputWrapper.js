import React, { useEffect, useRef } from 'react'

const InputWrapper = (props) => {
  const styleWrapper = {
    left: props.position.x + 'px',
    top: props.position.y + 'px'
  }

  const input = useRef(null)
  const closeButton = useRef(null)

  useEffect(() => {
    const inputCurrent = input.current
    const closeButtonCurrent = closeButton.current

    inputCurrent.addEventListener('keypress', props.enterPress)
    closeButtonCurrent.addEventListener('click', props.deleteTag)

    return () => {
      inputCurrent.removeEventListener('keypress', props.enterPress)
      closeButtonCurrent.removeEventListener('click', props.deleteTag)
    }
  })

  return (
    <div className='input-wrapper' style={styleWrapper}>
      <input
        type='text'
        size='15'
        className='form-control tag-input'
        placeholder='Enter tag text'
        ref={input}
        value={props.value}
        onChange={props.changeValue}
        autoFocus
      />
      <span className='close' ref={closeButton}>&times;</span>
    </div>
  )
}

export default InputWrapper
