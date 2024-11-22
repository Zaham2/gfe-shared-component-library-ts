import Checkbox from "./components/Checkbox"
import "./index.scss"

function App() {

  return (
    <div className="app-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
    }}>
      <Checkbox boxState="disabled" />
      <Checkbox boxState="checked"/>
      <Checkbox boxState="indeterminate"/>
      <Checkbox boxState="unchecked"/>
      </div>
  )
}

export default App
