import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Accesories } from "./pages/Accesories"
import { Cyberpunk } from "./pages/Cyberpunk"
import { Model3 } from "./pages/Model3"
import { ModelS } from "./pages/ModelS"
import { ModelX } from "./pages/ModelX"
import { ModelY } from "./pages/ModelY"
import { Powerwall } from "./pages/Powerwall"
import { SolarPanels } from "./pages/SolarPanels"
import { SolarRoof } from "./pages/SolarRoof"




function App() {
  

  return (
    <>
      <div className="relative bg-model3 h-screen bg-center bg-cover ">
        <Header />
        
        <Model3 />
        
      </div>
      <ModelY />
      <ModelX />
      <ModelS />
      <Cyberpunk />
      <SolarPanels />
      <SolarRoof />
      <Powerwall />
      <Accesories />
      <Footer />
    </>
  )
}

export default App
