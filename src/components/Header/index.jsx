import React from 'react'
import {Logo, HeaderContainer} from './styles'

const Header = ({children}) => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Book Club logo" />
    </a>
    {children}
  </HeaderContainer>
)

export default Header
