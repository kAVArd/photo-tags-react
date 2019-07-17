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

    inputCurrent.addEventListener('change', props.changeValue)
    closeButtonCurrent.addEventListener('click', props.deleteTag)

    return () => {
      inputCurrent.removeEventListener('change', props.changeValue)
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
        defaultValue={props.value}
        autoFocus
      />
      <span className='close' ref={closeButton}>&times;</span>
    </div>
  )
}

export default InputWrapper
