import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authenticationContext';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import AllBooks from './components/AllBooks/AllBooks';
import AddBook from './components/AddBook/AddBook';
import BookDetails from './components/BookDetails/BookDetails';
import Logout from './components/Logout/Logout';
import EditBook from './components/EditBook/EditBook';
import AllQuotes from './components/AllQuotes/AllQuotes';
import AddQuote from './components/AddQuote/AddQuote';
import RouteGuards from './components/RouteGuards/RouteGuards';


function App() {

  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/books' element={<AllBooks />}></Route>
          <Route path='/books/:bookId' element={<BookDetails />}></Route>
          <Route path='/quotes/add-quote' element={<AddQuote />}></Route>
          <Route path='/quotes' element={<AllQuotes />}></Route>
          <Route path='*' element={<Error />} />

          <Route element={<RouteGuards />}>
            <Route path='/add-book' element={<AddBook />}></Route>
            <Route path='/books/:bookId/edit' element={<EditBook />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
          </Route>

        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
