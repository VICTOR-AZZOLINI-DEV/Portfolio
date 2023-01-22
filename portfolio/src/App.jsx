import './App.css'
import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import Contato from './pages/Contato';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';
import Home from './pages/Home'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Sobre />
      <Portfolio />      
      <Contato />
      <Footer/>
    </div>
  )
}

export default App;
