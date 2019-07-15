import React from 'react'

const InputWrapper = (props) => {
  const styleWrapper = {
    left: props.position.x,
    top: props.position.y,
    visibility: props.visibility
  }

  return (
    <div className='input-wrapper' style={styleWrapper}>
      <input 
        type='text' 
        size='15' 
        className='form-control tag-input' 
        placeholder='Enter tag text'
        onChange={props.onChange} 
        value={props.inputValue}
      />
      <span className="close">&times;</span>
    </div>
  )
}

export default InputWrapper
