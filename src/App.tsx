import Toggle from "./components/Toggle"
import Tooltip from "./components/Tooltip"
import "./index.scss"
import { TOGGLE_SIZES, TOGGLE_STATES, TOOLTIP_ALIGNMENTS, TOOLTIP_POSITIONS } from "./lib/constants"

function App() {

  return (
    <div className="app-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
    }}>
      <Tooltip tip={"insert tip here"} >
        <Toggle initialState={TOGGLE_STATES.INITIAL} size={TOGGLE_SIZES.MEDIUM} />
      </Tooltip>
      <Toggle initialState={TOGGLE_STATES.FOCUS} size={TOGGLE_SIZES.MEDIUM} />
      <Toggle initialState={TOGGLE_STATES.DISABLED} size={TOGGLE_SIZES.MEDIUM} />
    </div>
  )
}

export default App
