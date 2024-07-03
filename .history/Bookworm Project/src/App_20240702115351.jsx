import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Error from './components/Error/Error'
import Catalog from './components/Catalog/Catalog'
import CatalogBook from './components/CatalogBook/CatalogBook'
import Add from './components/Add/Add'

// import './App.css';

function App() {

  return (
    <>
      <Header />

      <Routes>
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
