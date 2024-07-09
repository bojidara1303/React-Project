import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Error from './components/Error/Error'
import Add from './components/Add/Add'
import Home from './components/Home/Home'
import AllBooks from './components/AllBooks/AllBooks'
import Book from './components/Book/Book'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/catalog' element={<Catalog />}></Route>
        <Route path='/catalog/:id' element={<CatalogBook />}></Route>
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
