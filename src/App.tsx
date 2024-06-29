import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"



function App() {
  

  return (
    <>
      <div className="relative bg-home-car h-screen bg-center bg-cover ">
        <Header />
        <p className='text-6xl'>
          Hello angel
        </p>
        <HomePage />
        <Footer />
      </div>
      
    </>
  )
}

export default App
