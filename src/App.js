import React, { useState } from 'react'
import update from 'immutability-helper'
import './style.css'
import ImageWrapper from './components/ImageWrapper'
import InputWrapper from './components/InputWrapper'
import TagsWrapper from './components/TagsWrapper'

const App = () => {
  const [tagsArray, setTagsArray] = useState([])
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [drugObject, setDrugObject] = useState(null)
  const [inputVisibility, setInputVisibility] = useState('hidden')
  const [ inputValue, setInputValue ] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)

  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const selectTag = (e) => {
    const tag = e.target.parentElement
    setDrugObject({
      index: tag.id,
      offset: {
        width: tag.offsetWidth,
        height: tag.offsetHeight
      }
    })
  }

  const unselectTag = function () {
    setDrugObject(null)
  }

  const moveTag = (e) => {
    if (drugObject !== null) {
      const newTagsArray = update(tagsArray, { [drugObject.index]: { position: {
        x: { $set: e.clientX - drugObject.offset.width / 2 },
        y: { $set: e.clientY - drugObject.offset.height / 2 }
      } } })
      setTagsArray(newTagsArray)
    }
  }

  const setInputDefault = () => {
    setEditingIndex(null)
    setInputValue('')
    setInputVisibility('hidden')
  }

  const displayInput = (x, y) => {
    setPosition({ x: x, y: y })
    setInputVisibility('visible')
  }

  const startEditTag = (e) => {
    const tagSpan = e.target.parentElement
    setInputValue(tagSpan.textContent)
    displayInput(tagSpan.offsetLeft, tagSpan.offsetTop)
    setEditingIndex(tagSpan.id)
    setTagsArray(update(tagsArray, { [tagSpan.id]: { isEditing: { $set: true } } }))
  }

  const deleteTag = (e) => {
    e.stopPropagation()
    if (editingIndex !== null) {
      setTagsArray(update(tagsArray, { $splice: [[editingIndex, 1]] }))
    }
    setInputDefault()
  }

  const handleClick = (e) => {
    if (e && e.target.className === 'image' && inputVisibility === 'hidden') {
      displayInput(e.clientX - 85, e.clientY - 19)
    }

    if (inputValue === '') {
      return
    }

    if (editingIndex !== null) {
      setTagsArray(update(tagsArray, { [editingIndex]: {
        isEditing: { $set: false },
        text: { $set: inputValue }
      } }))
    } else setTagsArray([...tagsArray, { text: inputValue, position: position, isEditing: false }])

    setInputDefault()
  }

  const enterPress = (e) => {
    if (e.which === 13) handleClick()
  }

  return (
    <div onClick={handleClick}>
      <ImageWrapper moveTag={moveTag} />
      {inputVisibility === 'visible' && <InputWrapper
        position={position}
        changeValue={changeInputValue}
        value={inputValue}
        deleteTag={deleteTag}
        enterPress={enterPress}
      />}
      <TagsWrapper tags={tagsArray} selectTag={selectTag} unselectTag={unselectTag} startEditTag={startEditTag} />
    </div>
  )
}

export default App
