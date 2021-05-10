import React from 'react'
import {Panel, P, Em} from './styles'
import Book from '../Book'

const DetailPanel = ({book}) => (
  <Panel>
    <Book book={book} isLarge={true} />
    <P>{book.description}</P>
    <P>
      <Em>Published in {book.published}</Em>
    </P>
  </Panel>
)

export default DetailPanel
