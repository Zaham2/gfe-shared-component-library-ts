import TabsComponent from "./components/TabsComponent"
import "./index.scss"

function App() {

  return (
    <div className="app-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh'
    }}>
      <TabsComponent tabs={['Account', 'Security', 'Plan']} />
    </div>
  )
}

export default App
