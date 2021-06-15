import styled from 'styled-components'
import {Pill} from '../../styles'

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  transition: 300ms;
  opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
  pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
`

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;
  box-sizing: border-box;
  height: calc(100vh - 83px);
  width: 660px;
  position: fixed;
  z-index: 2;
  right: 0;
  bottom: 0;
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  transition: 300ms;
  right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-660px')};

  @media (max-width: 1000px) {
    height: calc(100vh - 75px);
    border-left: none;
    width: 100vw;
    padding: 40px 86px 20px 20px;
    bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh')};
    right: unset;
  }
`

export const CloseWrapper = styled(Pill)`
  position: fixed;
  cursor: pointer;
  top: 130px;
  right: 40px;
  z-index: 4;
  display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};

  button {
    margin-left: -3px;
  }

  @media (max-width: 1000px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`

export const Em = styled.em`
  font-style: italic;
`
