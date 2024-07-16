import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { login } from './services/authenticationService'

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Error from './components/Error/Error'
import Home from './components/Home/Home'
import AllBooks from './components/AllBooks/AllBooks'
import AddBook from './components/AddBook/AddBook'
import BookDetails from './components/BookDetails/BookDetails'
import AuthenticationContext from './contexts/authenticationContext'

function App() {
  const navigate = useNavigate()
  const [authentication, setAuthentication] = useState({});

  const loginSubmitHandler = async ({ email, password }) => {
    const result = await login(email, password);

    setAuthentication(result)
    navigate('/')
  }

  const values = {
    loginSubmitHandler,
    username: authentication.username,
    email: authentication.email,
    isAuthenticated: !!authentication.username
  }

  return (
    <>
      <AuthenticationContext.Provider value={{ loginSubmitHandler, ...authentication }}>
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
      </AuthenticationContext.Provider>
    </>
  )
}

export default App
