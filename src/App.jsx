import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      const books = await response.json()
      setBooks(books)
    }

    fetchData()
  }, [])

  return (
    <>
      <BooksContainer books={books} />
    </>
  )
}

export default App
