import React from 'react'
import InputWrapper from './InputWrapper'

const Tag = ({
  tag,
  id,
  selectTag,
  unselectTag,
  enterPress,
  deleteTag,
  changeText,
  startEditTag
}) => {
  if (tag.isEditing) {
    return (
      <InputWrapper
        enterPress={enterPress}
        deleteTag={deleteTag}
        changeText={changeText}
        text={tag.text}
        position={tag.position}
        id={id}
      />
    )
  }
  return (
    <span
      onMouseDown={(e) => {
        const tag = e.target.parentElement
        selectTag(id, tag.offsetWidth, tag.offsetHeight)
      }}
      onMouseUp={unselectTag}
      onDoubleClick={() => startEditTag(id)}
      className='tag badge badge-secondary'
      id={id}
      style={{ left: tag.position.x + 'px', top: tag.position.y + 'px' }}
    >
      <h6>{tag.text}</h6>
    </span>
  )
}

export default Tag
