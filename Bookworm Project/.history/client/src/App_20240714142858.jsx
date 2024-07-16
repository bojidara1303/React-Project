import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Error from './components/Error/Error'
import Home from './components/Home/Home'
import AllBooks from './components/AllBooks/AllBooks'
// import Book from './components/Book/Book'
import AddBook from './components/AddBook/AddBook'
import BookDetails from './components/BookDetails/BookDetails'
import { useState } from 'react'

function App() {
  const [authentication, setAuthentication] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add-book' element={<AddBook />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/books' element={<AllBooks />}></Route>
        <Route path='/books/:bookId' element={<BookDetails />}></Route>
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
