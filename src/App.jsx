import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Footer from './components/Footer'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <HashRouter>
        <div className="lg:flex gap-8  justify-center items-center lg:mx-60 lg:py-4 xl:w-screen xl:mx-0 xl:justify-evenly">
          <Header />
          <Navigation />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Booking />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
