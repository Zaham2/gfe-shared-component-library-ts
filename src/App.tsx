import Toast from "./components/Toast"
import "./index.scss"
import { TOAST_VARIANTS } from "./lib/constants"

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
      <Toast state={TOAST_VARIANTS.SUCCESS} message={"Your content successfully added"} />
      <Toast state={TOAST_VARIANTS.INFO} message="Your content is publicly visible" />
      <Toast state={TOAST_VARIANTS.ERROR} message="Your content successfully deleted"/>
      <Toast state={TOAST_VARIANTS.WARNING} message="Your image is 5Mb, it may laod longer!"/>
      </div>
  )
}

export default App
