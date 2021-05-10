import React, {useRef, useState} from 'react'
import {SearchContainer, Input, Icon} from './styles'
import {Close} from '../../styles'

const Search = ({filterBooks}) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const handleChange = (event) => {
    filterBooks(event.target.value)
  }

  const clearSearch = () => {
    filterBooks('')
    inputEl.current.value = ''
    setShowOnDesktop(false)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  return (
    <SearchContainer $showOnDesktop={showOnDesktop}>
      <Icon onClick={showSearch} />
      <Input ref={inputEl} type="text" name="search" autoComplete="off" onChange={handleChange} />
      <Close onClick={clearSearch} />
    </SearchContainer>
  )
}

export default Search
