import "./index.scss"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar items={["Home", "Features", "Pricing", "About us", "Contact"]} />
    </>
  )
}

export default App
