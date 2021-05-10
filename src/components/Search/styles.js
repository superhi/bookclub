import styled from 'styled-components'
import {Pill} from '../../styles'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'

export const SearchContainer = styled(Pill)`
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '420px' : '20px')};
  transition: 300ms;

  input,
  button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};

    @media (max-width: 800px) {
      display: block;
    }
  }

  @media (max-width: 800px) {
    width: 85%;
  }
`

export const Input = styled.input`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  cursor: pointer;
`
