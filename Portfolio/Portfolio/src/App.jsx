
import { Contact } from "./Componants/Contact"
import { Footer } from "./Componants/Footer"
import { NavBare } from "./Componants/NavBare"
import { Projects } from "./Componants/Projects"
import { Services } from "./Componants/Services/Services"
import { Skills } from "./Componants/Skills"
import { Header } from "./Componants/Header/Header"




const App = () => { 
  return (
    <>
      <NavBare />
      <Header />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer /> 
    </>
  )
}

export default App
