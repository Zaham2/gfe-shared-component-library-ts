import "./index.scss"
import TextInput from "./components/TextInput"
import { TEXT_INPUT_TYPES } from "./lib/constants"

function App() {

  return (
    <>
      <TextInput hint="Enter email address" inputType={TEXT_INPUT_TYPES.EMAIL} label="some label" placeholder="some text" />
      <TextInput hint="Enter password" inputType={TEXT_INPUT_TYPES.PASSWORD} label="some label" placeholder="some text" />
      </>
  )
}

export default App
