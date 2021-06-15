import React, {useState, useRef} from 'react'
import {Input, SearchContainer, Icon, Wrapper, FaveButtonContainer, Counter} from './styles'
import {Close, Button} from '../../styles'

const FaveButton = ({faveBooksLength, toggleShowFaves, showFaves}) => (
  <FaveButtonContainer>
    <Counter>{faveBooksLength}</Counter>
    <Button onClick={toggleShowFaves} $isHeader={true}>
      {showFaves ? 'Hide faves' : 'Show faves'}
    </Button>
  </FaveButtonContainer>
)

const Search = ({filterBooks, faveBooksLength, toggleShowFaves, showFaves}) => {
  const inputEl = useRef(null)
  const [showOnDesktop, setShowOnDesktop] = useState(false)

  const handleChange = (event) => {
    filterBooks(event.target.value)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  const clearSearch = () => {
    filterBooks('')
    setShowOnDesktop(false)
    inputEl.current.value = ''
  }

  return (
    <Wrapper>
      <FaveButton
        toggleShowFaves={toggleShowFaves}
        showFaves={showFaves}
        faveBooksLength={faveBooksLength}
      />
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input ref={inputEl} type="text" name="search" onChange={handleChange} autoComplete="off" />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  )
}

export default Search
