import React from 'react'

const TagsWrapper = (props) => {
  return (
    <div className='tags-wrapper'>
      {props.tags.map((tag, index) => {
        if (!tag.isEditing) {
          return (
            <span 
              key={index} 
              className='tag badge badge-secondary' 
              id={index} 
              style={{ left: tag.position.x, top: tag.position.y }}
              onMouseDown={props.onMouseDown}
              onMouseUp={props.onMouseUp}
            >
            <h6>{tag.text}</h6>
            </span>
          )
        }
        return null
      })}
    </div>
  )
}

export default TagsWrapper
