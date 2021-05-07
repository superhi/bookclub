import React from 'react'
import {Container, H2, BookList} from './styles'
import Book from '../Book'

const BooksContainer = ({books}) => (
  <Container>
    <H2>All books</H2>
    <BookList>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </BookList>
  </Container>
)

export default BooksContainer
