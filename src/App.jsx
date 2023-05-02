import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Header, TopRated} from './components'
import {Cart, Home, Search} from './pages'
const App = () => {
  return (
    <>
    <div className="app">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<TopRated/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </Router>
    </div>
    </>
  )
}

export default App