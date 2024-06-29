import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Model3 } from "./pages/Model3"
import { ModelY } from "./pages/ModelY"




function App() {
  

  return (
    <>
      <div className="relative bg-model3 h-screen bg-center bg-cover ">
        <Header />
        
        <Model3 />
        
      </div>
      <ModelY />
      <Footer />
    </>
  )
}

export default App
