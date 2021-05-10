import styled from 'styled-components'
import {Pill} from '../../styles'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'

export const SearchContainer = styled(Pill)`
  width: 420px;
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
