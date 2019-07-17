import React from 'react'

const Tag = (props) => {
  return (
    <span
      className='tag badge badge-secondary'
      id={props.id}
      style={{ left: props.position.x + 'px', top: props.position.y + 'px' }}
      onMouseDown={props.selectTag}
      onMouseUp={props.unselectTag}
      onDoubleClick={props.startEditTag}
    >
      <h6>{props.text}</h6>
    </span>
  )
}

export default Tag
