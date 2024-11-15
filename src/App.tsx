import RadioCard from "./components/RadioCard"
import ThemeSwitchButton from "./components/ThemeSwitchButton"
import "./index.scss"
import { RADIO_CARD_STATES, RADIO_ICON_POSITIONS, RADIO_ICON_TYPES } from "./lib/constants"

function App() {

  return (
    <div>
      <RadioCard text={'RB1'} iconPosition={RADIO_ICON_POSITIONS.RIGHT} showArrow={true} iconType={RADIO_ICON_TYPES.WEEKLY} />
      <RadioCard text={'my text'} showArrow={true} iconType={RADIO_ICON_TYPES.MONTHLY}  />
      <RadioCard iconType={RADIO_ICON_TYPES.WEEKLY}  />
      <RadioCard heading={'Radio heading'} iconType={RADIO_ICON_TYPES.WEEKLY}  />
      <RadioCard heading={'Radio heading'} text={'my text'} showArrow={true} iconType={RADIO_ICON_TYPES.ANNUALLY}  />
      <RadioCard heading={'Radio heading'} text={'my text'} state={RADIO_CARD_STATES.DISABLED} />
      <ThemeSwitchButton />
    </div>
  )
}

export default App
