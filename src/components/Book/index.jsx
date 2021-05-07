import React from 'react'
import {Container, Cover, Title, Author} from './styles'

const Book = ({book, pickBook}) => (
  <Container onClick={() => pickBook(book)}>
    <Cover alt={`Book cover for ${book.title} by ${book.author}`} src={book.image} />
    <figcaption>
      <Title>{book.title}</Title>
      <Author>by {book.author}</Author>
    </figcaption>
  </Container>
)

export default Book
