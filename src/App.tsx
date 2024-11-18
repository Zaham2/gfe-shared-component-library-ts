import Toggle from "./components/Toggle"
import "./index.scss"
import { TOGGLE_SIZES, TOGGLE_STATES } from "./lib/constants"

function App() {

  return (
    <div className="app-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh'
    }}>
      <Toggle initialState={TOGGLE_STATES.INITIAL} size={TOGGLE_SIZES.MEDIUM} />
      <Toggle initialState={TOGGLE_STATES.FOCUS} size={TOGGLE_SIZES.MEDIUM} />
      <Toggle initialState={TOGGLE_STATES.DISABLED} />
      </div>
  )
}

export default App
