// My First Component from Udemy Course
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Because these are JavaScript files, we don't need to add the .js extension on the file names.
// These are ES6 modules (not specific to Vanilla JS or React)
import { books } from './books'
import Book from './book'

const BookList = () => {
  return (
    <>
      <h1>best sellers: best books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          // const { img, title, author, id } = book
          // return <Book img={img} title={title} author={author} key={id} />
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
