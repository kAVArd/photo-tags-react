import React, { useRef, useEffect } from 'react'
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
  const span = useRef(null)

  useEffect(() => {
    if (!tag.isEditing) {
      const spanCurrent = span.current
      spanCurrent.addEventListener('mousedown', (e) => {
        const tag = e.target.parentElement
        selectTag(id, tag.offsetWidth, tag.offsetHeight)
      })
      spanCurrent.addEventListener('mouseup', unselectTag)
      spanCurrent.addEventListener('dblclick', () => startEditTag(id))
      return () => {
        spanCurrent.removeEventListener('mousedown', (e) => {
          const tag = e.target.parentElement
          selectTag(id, tag.offsetWidth, tag.offsetHeight)
        })
        spanCurrent.removeEventListener('mouseup', unselectTag)
        spanCurrent.removeEventListener('dblclick', () => startEditTag(id))
      }
    }
  }, [selectTag, unselectTag, startEditTag, id, tag.isEditing])

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
      ref={span}
      className='tag badge badge-secondary'
      id={id}
      style={{ left: tag.position.x + 'px', top: tag.position.y + 'px' }}
    >
      <h6>{tag.text}</h6>
    </span>
  )
}

export default Tag
