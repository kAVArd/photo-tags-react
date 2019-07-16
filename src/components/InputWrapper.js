import React from 'react'

const InputWrapper = (props) => {
  const styleWrapper = {
    left: props.position.x,
    top: props.position.y,
    visibility: props.visibility
  }

  if (props.visibility === 'visible') {
    return (
      <div className='input-wrapper' style={styleWrapper}>
        <input
          type='text'
          size='15'
          className='form-control tag-input'
          placeholder='Enter tag text'
          onChange={props.changeInputValue}
          value={props.inputValue}
          autoFocus
        />
        <span className='close' onClick={props.deleteTag}>&times;</span>

      </div>
    )
  }
  return null
}

export default InputWrapper
