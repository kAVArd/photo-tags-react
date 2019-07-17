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

  const close = useRef(null)
  const input = useRef(null)

  useEffect(() => {
    const closeCurrent = close.current
    const inputCurrent = input.current

    closeCurrent.addEventListener('click', (e) => {
      e.stopPropagation()
      deleteTag(id)
    })
    inputCurrent.addEventListener('keypress', (e) => {
      if (e.which === 13) enterPress()
    })

    return () => {
      closeCurrent.removeEventListener('click', (e) => {
        e.stopPropagation()
        deleteTag(id)
      })
      inputCurrent.removeEventListener('keypress', (e) => {
        if (e.which === 13) enterPress()
      })
    }
  })

  return (
    <div className='input-wrapper' style={styleWrapper}>
      <input
        ref={input}
        type='text'
        size='15'
        className='form-control tag-input'
        placeholder='Enter tag text'
        onChange={(e) => changeText(id, e)}
        value={text}
        autoFocus
      />
      <span className='close' ref={close}>&times;</span>
    </div>
  )
}

export default InputWrapper
