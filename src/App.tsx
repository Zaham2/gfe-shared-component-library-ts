import Badge from "./components/badge-component/Badge"
import Button from "./components/button-component/Button"
import * as constants from "./lib/constants"
import "./index.scss"

function App() {

  return (
    <>
      <Badge size={constants.BADGE_SIZES.LARGE} color={constants.BADGE_COLORS.GREEN}>Some label text Here</Badge>
      <Button btnState={constants.BUTTON_STATES.HOVER} variant={constants.BUTTON_VARIANTS.PRIMARY} size={constants.BUTTON_SIZES.TWO_X_LARGE}>Button</Button>
    </>
  )
}

export default App
