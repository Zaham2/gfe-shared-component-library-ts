import ModalDialog from "./components/ModalDialog"
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
    }}>
      <ModalDialog body="sample text input" title="sample title"/>
      </div>
  )
}

export default App
