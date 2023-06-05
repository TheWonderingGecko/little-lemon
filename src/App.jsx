import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="lg:flex gap-8  justify-center items-center lg:mx-60 lg:py-4 xl:w-screen xl:mx-0 xl:justify-evenly">
        <Header />
        <Navigation />
      </div>

      <Main />
      <Footer />
    </>
  )
}

export default App
