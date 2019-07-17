import React from 'react'
import Tag from './Tag'

const TagsWrapper = ({
  tags,
  selectTag,
  unselectTag,
  enterPress,
  deleteTag,
  changeText,
  startEditTag
}) => {
  return (
    <div className='tags-wrapper'>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          tag={tag}
          id={index}
          selectTag={selectTag}
          unselectTag={unselectTag}
          enterPress={enterPress}
          deleteTag={deleteTag}
          changeText={changeText}
          startEditTag={startEditTag}
        />
      )
      )}
    </div>
  )
}

export default TagsWrapper
