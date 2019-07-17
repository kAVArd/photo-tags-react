import React, { useState, useRef, useEffect } from 'react'
import update from 'immutability-helper'
import './style.css'
import ImageWrapper from './components/ImageWrapper'
import TagsWrapper from './components/TagsWrapper'

const App = () => {
  const [tagsArray, setTagsArray] = useState([])
  const [drugObject, setDrugObject] = useState(null)

  const changeInputValue = (id, e) => {
    setTagsArray(update(tagsArray, { [id]: { text: { $set: e.target.value } } }))
  }

  const selectTag = (id, width, height) => {
    setDrugObject({
      index: id,
      offset: {
        width: width,
        height: height
      }
    })
  }

  const unselectTag = function () {
    setDrugObject(null)
  }

  const moveTag = (e) => {
    if (drugObject !== null) {
      setTagsArray(update(tagsArray, { [drugObject.index]: { position: {
        x: { $set: e.clientX - drugObject.offset.width / 2 },
        y: { $set: e.clientY - drugObject.offset.height / 2 }
      } } }))
    }
  }

  const handleClick = (e) => {
    if (e && e.target.className === 'image') {
      setTagsArray(update(tagsArray, { $push: [{
        text: '',
        position: {
          x: e.clientX - 85,
          y: e.clientY - 19
        },
        isEditing: true
      }] }))
    }

    tagsArray.forEach((tag, index) => {
      if (tag.text === '') setTagsArray(update(tagsArray, { $splice: [[index, 1]] }))
      else if (tag.isEditing) setTagsArray(update(tagsArray, { [index]: { isEditing: { $set: false } } }))
    })
  }

  const startEditTag = (id) => {
    setTagsArray(update(tagsArray, { [id]: { isEditing: { $set: true } } }))
  }

  const enterPress = () => handleClick()

  const container = useRef()

  useEffect(() => {
    const containerCurrent = container.current
    containerCurrent.addEventListener('click', handleClick)
    return () => {
      containerCurrent.removeEventListener('click', handleClick)
    }
  })

  const deleteTag = (id) => {
    setTagsArray(update(tagsArray, { $splice: [[id, 1]] }))
  }

  return (
    <div ref={container}>
      <ImageWrapper moveTag={moveTag} />
      <TagsWrapper
        tags={tagsArray}
        selectTag={selectTag}
        unselectTag={unselectTag}
        enterPress={enterPress}
        deleteTag={deleteTag}
        changeText={changeInputValue}
        startEditTag={startEditTag}
      />
    </div>
  )
}

export default App
