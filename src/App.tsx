import DropdownMenu from "./components/DropdownMenu"
import { MdLaptopMac } from "react-icons/md";
import "./index.scss"

function App() {

  return (
    <div className="app-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
      <DropdownMenu icon={<MdLaptopMac />} options={['something 1', 'someone 2', 'somewhere 3']} />
      <DropdownMenu options={['something 1', 'someone 2', 'somewhere 3']} />
      </div>
  )
}

export default App
