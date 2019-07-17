import React, { useRef, useEffect } from 'react'

const Tag = (props) => {
  const tag = useRef(null)

  useEffect(() => {
    const tagCurrent = tag.current
    tagCurrent.addEventListener('mousedown', props.selectTag)
    tagCurrent.addEventListener('mouseup', props.unselectTag)
    tagCurrent.addEventListener('dblclick', props.startEditTag)
    return () => {
      tagCurrent.removeEventListener('mousedown', props.selectTag)
      tagCurrent.removeEventListener('mouseup', props.unselectTag)
      tagCurrent.removeEventListener('dblclick', props.startEditTag)
    }
  }, [])

  return (
    <span
      ref={tag}
      className='tag badge badge-secondary'
      id={props.id}
      style={{ left: props.position.x + 'px', top: props.position.y + 'px' }}
    >
      <h6>{props.text}</h6>
    </span>
  )
}

export default Tag
