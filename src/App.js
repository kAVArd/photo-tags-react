import React, { useState } from 'react'
import './style.css'
import ImageWrapper from './components/ImageWrapper'
import InputWrapper from './components/InputWrapper'
import TagsWrapper from './components/TagsWrapper'

const App = () => {
  const [tagsArray, setTagsArray] = useState([])
  const [position, setPosition] = useState({ x: '', y: '' })
  const [drugObject, setDrugObject] = useState(null)
  const [inputVisibility, setInputVisibility] = useState('hidden');
  const [ inputValue, setInputValue ] = useState('');
  let editingTagIndex = null

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const onMouseDown = (e) => {
    setDrugObject(e.target.parentElement)
  }

  const onMouseUp = function () {
    setDrugObject(null)
  }

  const onMouseMove = (e) => {
    if (drugObject !== null) {
      drugObject.style.left = e.clientX - drugObject.offsetWidth / 2 + 'px'
      drugObject.style.top = e.clientY - drugObject.offsetHeight / 2 + 'px'
    }
  }

  const handleClick = (e) => {
    if (e && e.target.className === 'image' && inputVisibility === 'hidden') {
      setPosition({x: e.clientX - 85 + 'px', y: e.clientY - 19 + 'px' })
      setInputVisibility('visible')
    }

    if (inputValue === '') {
      return
    }

    if (editingTagIndex !== null) {
      
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
      <ImageWrapper onMouseMove={onMouseMove} />
      <InputWrapper visibility={inputVisibility} position={position} onChange={onChangeInput} inputValue={inputValue} />
      <TagsWrapper tags={tagsArray} onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
    </div>
  )
}

export default App
