import styled from 'styled-components'

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;

  height: calc(100vh - 82px);
  width: 660px;

  position: fixed;
  z-index: 2;
  right: 0;
  bottom: 0;

  box-sizing: border-box;
  padding: 40px 120px 60px 40px;

  overflow: scroll;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    bottom: 0;
    right: unset;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`

export const Em = styled.em`
  font-weight: italic;
`
