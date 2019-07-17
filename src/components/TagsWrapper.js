import React from 'react'
import Tag from './Tag'

const TagsWrapper = (props) => {
  return (
    <div className='tags-wrapper'>
      {props.tags.map((tag, index) => {
        if (tag.isEditing) return null
        return (
          <Tag
            key={index}
            id={index}
            position={tag.position}
            selectTag={props.selectTag}
            unselectTag={props.unselectTag}
            startEditTag={props.startEditTag}
            text={tag.text}
          />
        )
      })}
    </div>
  )
}

export default TagsWrapper
