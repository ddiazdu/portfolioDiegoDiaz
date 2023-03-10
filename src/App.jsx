import S from "react-switch";
const Switch = S.default ? S.default : S
import Header from "./components/Header"
import Aboutme from "./components/Aboutme"
import Portafolio from "./components/Portafolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <Header />
      <Aboutme />
      <Portafolio />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
