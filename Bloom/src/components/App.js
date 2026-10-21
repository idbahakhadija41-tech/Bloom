import Banner from './Banner'
import ShoppingList from './ShoppingList'
import logo from '../assets/logo.svg'
import '../styles/App.css'

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="Bloom" className="bloom-logo" />
        <h1 className="bloom-title">Bloom</h1>
      </Banner>
      <ShoppingList />
    </div>
  )
}

export default App
