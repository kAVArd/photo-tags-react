import React from 'react'

const InputWrapper = (props) => {
  const styleWrapper = {
    left: props.position.x + 'px',
    top: props.position.y + 'px'
  }

  return (
    <div className='input-wrapper' style={styleWrapper}>
      <input
        type='text'
        size='15'
        className='form-control tag-input'
        placeholder='Enter tag text'
        value={props.value}
        onChange={props.changeValue}
        onKeyPress={props.enterPress}
        autoFocus
      />
      <span className='close' onClick={props.deleteTag}>&times;</span>
    </div>
  )
}

export default InputWrapper
