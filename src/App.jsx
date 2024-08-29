
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RestView from './pages/RestView'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/restaurant_view' element={<RestView />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
