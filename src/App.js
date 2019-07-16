import React, { useState } from 'react'
import update from 'immutability-helper'
import './style.css'
import ImageWrapper from './components/ImageWrapper'
import InputWrapper from './components/InputWrapper'
import TagsWrapper from './components/TagsWrapper'

const App = () => {
  const [tagsArray, setTagsArray] = useState([])
  const [position, setPosition] = useState({ x: '', y: '' })
  const [drugObject, setDrugObject] = useState(null)
  const [inputVisibility, setInputVisibility] = useState('hidden')
  const [ inputValue, setInputValue ] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)

  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const selectTag = (e) => {
    setDrugObject(e.target.parentElement)
  }

  const unselectTag = function () {
    setDrugObject(null)
  }

  const moveTag = (e) => {
    if (drugObject !== null) {
      drugObject.style.left = e.clientX - drugObject.offsetWidth / 2 + 'px'
      drugObject.style.top = e.clientY - drugObject.offsetHeight / 2 + 'px'
    }
  }

  const startEditTag = (e) => {
    const tagSpan = e.target.parentElement
    setInputValue(tagSpan.textContent)
    setPosition({ x: tagSpan.offsetLeft + 'px', y: tagSpan.offsetTop + 'px' })
    const newTagArray = update(tagsArray, { [tagSpan.id]: { isEditing: { $set: true } } })
    setTagsArray(newTagArray)
    setEditingIndex(tagSpan.id)
    setInputVisibility('visible')
  }

  const deleteTag = (e) => {
    e.stopPropagation()
    if (editingIndex !== null) {
      const newTagsArray = update(tagsArray, { $splice: [[editingIndex, 1]] })
      console.log(newTagsArray)
      setTagsArray(newTagsArray)
    }
    setEditingIndex(null)
    setInputValue('')
    setInputVisibility('hidden')
  }

  const handleClick = (e) => {
    if (e && e.target.className === 'image' && inputVisibility === 'hidden') {
      setPosition({ x: e.clientX - 85 + 'px', y: e.clientY - 19 + 'px' })
      setInputVisibility('visible')
    }

    if (inputValue === '') {
      return
    }

    if (editingIndex !== null) {
      const newTagsArray = update(tagsArray, { [editingIndex]: { isEditing: { $set: false } } })
      setTagsArray(newTagsArray)
      setEditingIndex(null)
    } else {
      setTagsArray([
        ...tagsArray,
        {
          text: inputValue,
          position: position,
          isEditing: false
        }
      ])
    }

    setInputValue('')
    setInputVisibility('hidden')
  }

  return (
    <div onClick={handleClick}>
      <ImageWrapper moveTag={moveTag} />
      <InputWrapper
        visibility={inputVisibility}
        position={position}
        changeInputValue={changeInputValue}
        inputValue={inputValue}
        deleteTag={deleteTag}
      />
      <TagsWrapper tags={tagsArray} selectTag={selectTag} unselectTag={unselectTag} startEditTag={startEditTag} />
    </div>
  )
}

export default App
