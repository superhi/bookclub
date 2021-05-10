import React from 'react'
import {Panel, P, Em, Close, CloseWrapper, BG} from './styles'
import Book from '../Book'

const DetailPanel = ({book, closePanel}) => (
  <>
    <BG onClick={closePanel} />
    <Panel>
      <CloseWrapper onClick={closePanel}>
        <Close />
      </CloseWrapper>
      <Book book={book} isLarge={true} />
      <P>{book.description}</P>
      <P>
        <Em>Published in {book.published}</Em>
      </P>
    </Panel>
  </>
)

export default DetailPanel
