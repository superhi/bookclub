import React from 'react'
import {SearchContainer, Input, Icon} from './styles'
import {Close} from '../../styles'

const Search = ({filterBooks}) => {
  const handleChange = (event) => {
    filterBooks(event.target.value)
  }

  return (
    <SearchContainer>
      <Icon />
      <Input type="text" name="search" autoComplete="off" onChange={handleChange} />
      <Close />
    </SearchContainer>
  )
}

export default Search
