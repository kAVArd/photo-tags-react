import React from 'react'

const TagsWrapper = (props) => {
  console.log(props.tags)
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
              onMouseDown={props.selectTag}
              onMouseUp={props.unselectTag}
              onDoubleClick={props.startEditTag}
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
