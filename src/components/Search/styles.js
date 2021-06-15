import styled from 'styled-components'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'
import {Pill} from '../../styles'

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1000px) {
    border-top: 2px solid black;
    align-items: center;
    justify-content: center;
    background: #ffbccc;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
    gap: unset;
  }
`

export const SearchContainer = styled(Pill)`
  transition: 300ms;
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '420px' : '20px')};

  input,
  button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};

    @media (max-width: 1000px) {
      display: block;
    }
  }

  @media (max-width: 1000px) {
    width: 50%;
    margin-right: 10px;
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
  width: 100%;
`

export const Icon = styled(MagnifyingIcon)`
  width: 30px;
  cursor: pointer;
`

export const FaveButtonContainer = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    position: relative;
    left: -15px;
  }
`

export const Counter = styled(Pill)`
  position: relative;
  right: -150px;
  bottom: 10px;
  padding: 4px;

  @media (max-width: 1000px) {
    right: -120px;
    padding: 2px;
  }
`
