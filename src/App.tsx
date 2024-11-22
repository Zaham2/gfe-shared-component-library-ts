import Pagination from "./components/Pagination"
import "./index.scss"

function App() {

  return (
    <div className="app-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <Pagination numberOfPages={3} />
      <Pagination numberOfPages={5}/>
      <Pagination numberOfPages={9}/>
      <Pagination numberOfPages={19}/>
      </div>
  )
}

export default App
