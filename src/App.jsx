import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="md:flex gap-8  justify-center items-center md:mx-60 md:py-4">
        <Header />
        <Navigation />
      </div>

      <Main />
      <Footer />
    </>
  )
}

export default App
